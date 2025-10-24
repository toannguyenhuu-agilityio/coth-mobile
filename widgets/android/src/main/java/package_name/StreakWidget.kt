package com.coth.dev

import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.Context
import android.content.Intent
import android.widget.RemoteViews
import com.coth.dev.R
import java.text.SimpleDateFormat
import java.util.*

class StreakWidgetProvider : AppWidgetProvider() {

    override fun onUpdate(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetIds: IntArray
    ) {
        for (appWidgetId in appWidgetIds) {
            updateWidget(context, appWidgetManager, appWidgetId)
        }
    }

    override fun onReceive(context: Context, intent: Intent) {
        super.onReceive(context, intent)
        
        if (intent.action == ACTION_UPDATE_STREAK) {
            val appWidgetManager = AppWidgetManager.getInstance(context)
            val appWidgetIds = appWidgetManager.getAppWidgetIds(
                android.content.ComponentName(context, StreakWidgetProvider::class.java)
            )
            onUpdate(context, appWidgetManager, appWidgetIds)
        }
    }

    private fun updateWidget(
        context: Context,
        appWidgetManager: AppWidgetManager,
        appWidgetId: Int
    ) {
        val views = RemoteViews(context.packageName, R.layout.sample_widget)
        
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val streakCount = prefs.getInt(KEY_STREAK_COUNT, 0)
        
        views.setTextViewText(R.id.streak_count, streakCount.toString())
        
        updateWeekView(context, views, prefs)
        
        val intent = Intent(context, StreakWidgetProvider::class.java).apply {
            action = ACTION_UPDATE_STREAK
        }
        val pendingIntent = android.app.PendingIntent.getBroadcast(
            context, 0, intent,
            android.app.PendingIntent.FLAG_UPDATE_CURRENT or android.app.PendingIntent.FLAG_IMMUTABLE
        )
        views.setOnClickPendingIntent(R.id.widget_container, pendingIntent)
        
        appWidgetManager.updateAppWidget(appWidgetId, views)
    }

    private fun updateWeekView(context: Context, views: RemoteViews, prefs: android.content.SharedPreferences) {
        val calendar = Calendar.getInstance()
        calendar.firstDayOfWeek = Calendar.SUNDAY
        calendar.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY)
        
        val dayIds = listOf(
            R.id.day_sunday,
            R.id.day_monday,
            R.id.day_tuesday,
            R.id.day_wednesday,
            R.id.day_thursday,
            R.id.day_friday,
            R.id.day_saturday
        )
        
        val dateFormat = SimpleDateFormat("yyyy-MM-dd", Locale.getDefault())
        
        for (i in 0..6) {
            val dateKey = dateFormat.format(calendar.time)
            val isCompleted = prefs.getBoolean("day_$dateKey", false)
            val dayOfMonth = calendar.get(Calendar.DAY_OF_MONTH)
            
            if (isCompleted) {
                // views.setImageViewResource(dayIds[i], R.drawable.ic_checkmark)
                views.setInt(dayIds[i], "setBackgroundResource", R.drawable.sample_day_completed)
            } else {
                views.setTextViewText(dayIds[i], dayOfMonth.toString())
                views.setInt(dayIds[i], "setBackgroundResource", R.drawable.sample_day_inactive)
            }
            
            calendar.add(Calendar.DAY_OF_MONTH, 1)
        }
    }

    companion object {
        private const val PREFS_NAME = "StreakWidgetPrefs"
        private const val KEY_STREAK_COUNT = "streak_count"
        private const val ACTION_UPDATE_STREAK = "com.coth.dev.UPDATE_STREAK"
    }
}