import SwiftUI
import WidgetKit

// MARK: - Entry
struct StreakWidgetEntry: TimelineEntry {
    let date: Date
    let streakCount: Int
    let weekDays: [DayInfo]
}

struct DayInfo {
    let name: String
    let number: Int
    let completed: Bool
}

// MARK: - Provider
struct StreakWidgetProvider: TimelineProvider {

    func placeholder(in context: Context) -> StreakWidgetEntry {
        StreakWidgetEntry(
            date: Date(),
            streakCount: 12,
            weekDays: getDefaultWeek()
        )
    }

    func getSnapshot(in context: Context, completion: @escaping (StreakWidgetEntry) -> Void) {
        let entry = StreakWidgetEntry(
            date: Date(),
            streakCount: loadStreakCount(),
            weekDays: loadWeekDays()
        )
        completion(entry)
    }

    func getTimeline(
        in context: Context, completion: @escaping (Timeline<StreakWidgetEntry>) -> Void
    ) {
        let currentDate = Date()
        let calendar = Calendar.current
        let midnight = calendar.startOfDay(for: currentDate)
        let nextMidnight = calendar.date(byAdding: .day, value: 1, to: midnight)!

        let entry = StreakWidgetEntry(
            date: currentDate,
            streakCount: loadStreakCount(),
            weekDays: loadWeekDays()
        )

        let timeline = Timeline(entries: [entry], policy: .after(nextMidnight))
        completion(timeline)
    }

    // Load data from UserDefaults
    private func loadStreakCount() -> Int {
        let shared = UserDefaults(suiteName: "group.com.coth.shared")
        return shared?.integer(forKey: "streak_count") ?? 12
    }

    private func loadWeekDays() -> [DayInfo] {
        let shared = UserDefaults(suiteName: "group.com.coth.shared")
        let calendar = Calendar.current

        var components = calendar.dateComponents([.yearForWeekOfYear, .weekOfYear], from: Date())
        components.weekday = 1

        guard let weekStart = calendar.date(from: components) else {
            return getDefaultWeek()
        }

        let dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
        var days: [DayInfo] = []
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "yyyy-MM-dd"

        for i in 0..<7 {
            if let date = calendar.date(byAdding: .day, value: i, to: weekStart) {
                let dayNum = calendar.component(.day, from: date)
                let dateKey = dateFormatter.string(from: date)
                let completed = shared?.bool(forKey: "day_\(dateKey)") ?? false

                days.append(
                    DayInfo(
                        name: dayNames[i],
                        number: dayNum,
                        completed: completed
                    ))
            }
        }

        return days
    }

    private func getDefaultWeek() -> [DayInfo] {
        return [
            DayInfo(name: "Su", number: 7, completed: true),
            DayInfo(name: "Mo", number: 8, completed: true),
            DayInfo(name: "Tu", number: 9, completed: true),
            DayInfo(name: "We", number: 11, completed: false),
            DayInfo(name: "Th", number: 12, completed: false),
            DayInfo(name: "Fr", number: 13, completed: false),
            DayInfo(name: "Sa", number: 14, completed: false),
        ]
    }
}

// MARK: - Widget View
struct StreakWidgetView: View {
    var entry: StreakWidgetEntry

    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            // Header
            HStack(alignment: .center) {
                HStack(spacing: 8) {
                    Text("\(entry.streakCount)")
                        .font(.system(size: 48, weight: .medium))
                        .foregroundColor(.white)

                    Text("Days Streak")
                        .font(.system(size: 14))
                        .foregroundColor(.white)
                }

                Spacer()

                Text("{ORE OF THE HEART")
                    .font(.system(size: 9, weight: .bold))
                    .foregroundColor(.white)
                    .tracking(1)
                    .padding(.horizontal, 4)
                    .padding(.vertical, 4)
                    .overlay(
                        RoundedRectangle(cornerRadius: 4)
                            .stroke(Color.white.opacity(0.3), lineWidth: 1)
                    )
            }

            // Week View
            HStack(spacing: 4) {
                ForEach(0..<entry.weekDays.count, id: \.self) { i in
                    DayView(day: entry.weekDays[i])
                }
            }

            Spacer()
        }
        .padding(50)
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
        .background(Color.black)

    }
}

// MARK: - Day View
struct DayView: View {
    let day: DayInfo

    var body: some View {
        VStack(spacing: 4) {
            Text(day.name)
                .font(.system(size: 9, weight: .medium))
                .foregroundColor(Color(red: 0.6, green: 0.6, blue: 0.6))

            ZStack {
                RoundedRectangle(cornerRadius: 8)
                    .fill(day.completed ? Color.white.opacity(0.1) : Color.clear)
                    .frame(width: 40, height: 40)
                    .overlay(
                        RoundedRectangle(cornerRadius: 8)
                            .stroke(
                                day.completed ? Color.white.opacity(0.4) : Color.white.opacity(0.2),
                                lineWidth: 1
                            )
                    )

                if day.completed {
                    Text("✓")
                        .font(.system(size: 20, weight: .bold))
                        .foregroundColor(.green)
                } else {
                    Text("\(day.number)")
                        .font(.system(size: 14, weight: .medium))
                        .foregroundColor(.white)
                }
            }
        }
    }
}

// MARK: - Widget
struct StreakWidget: Widget {
    let kind: String = "StreakWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: StreakWidgetProvider()) { entry in
            StreakWidgetView(entry: entry)
        }
        .configurationDisplayName("COTH")
        .description("Track your daily devotion streak")
        .supportedFamilies([.systemMedium])
    }
}

// MARK: - Main Entry
@main
struct StreakWidgets: WidgetBundle {
    var body: some Widget {
        StreakWidget()
    }
}
