import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Award, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export function SchedulePage() {
  const events = [
    {
      date: "2026-08-05",
      title: "Season Reveal & Kickoff",
      location: "First Lego League",
      time: "12:00 AM - 11:59 PM",
      type: "meeting",
      description: "New Season kickoff and reveal!",
    },
  ];

  const eventTypeStyles = {
    competition: { bg: "from-[#FFFF00]/20 to-[#FFFF00]/5", border: "border-[#FFFF00]/50", icon: Award, label: "Competition" },
    workshop: { bg: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/50", icon: Users, label: "Workshop" },
    outreach: { bg: "from-green-500/20 to-green-500/5", border: "border-green-500/50", icon: Users, label: "Outreach" },
    meeting: { bg: "from-purple-500/20 to-purple-500/5", border: "border-purple-500/50", icon: Users, label: "Meeting" },
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  };

  const isUpcoming = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate >= today;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/" className="inline-flex items-center gap-2 text-[#F7F7F7]/60 hover:text-[#FFFF00] transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#F7F7F7] mb-6">
              Team <span className="text-[#FFFF00]">Schedule</span>
            </h1>
            <p className="text-lg text-[#F7F7F7]/70 max-w-3xl mx-auto leading-relaxed">
              Stay up to date with our upcoming events. Mark your calendars and join us!
            </p>
          </div>
        </motion.div>

        {/* Calendar View */}
        <div className="grid gap-6">
          {events.map((event, index) => {
            const upcoming = isUpcoming(event.date);
            const typeStyle = eventTypeStyles[event.type as keyof typeof eventTypeStyles];
            const Icon = typeStyle.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 bg-gradient-to-r ${typeStyle.bg} border ${typeStyle.border} rounded-xl hover:scale-[1.01] transition-all ${!upcoming ? "opacity-60" : ""}`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-[#0F0F0F] rounded-xl border border-[#606060]/30 flex flex-col items-center justify-center">
                      <div className="text-[#FFFF00] text-sm font-semibold">
                        {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                      </div>
                      <div className="text-[#F7F7F7] text-3xl font-bold">
                        {new Date(event.date).getDate()}
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="w-5 h-5 text-[#FFFF00]" />
                          <span className="text-[#FFFF00] text-sm font-semibold uppercase">{typeStyle.label}</span>
                          {upcoming && (
                            <span className="px-2 py-1 bg-[#FFFF00]/20 border border-[#FFFF00]/50 rounded-full text-[#FFFF00] text-xs font-semibold">Upcoming</span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-[#F7F7F7] mb-2">{event.title}</h3>
                        <p className="text-[#F7F7F7]/70 leading-relaxed">{event.description}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-[#F7F7F7]/60">
                      <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#FFFF00]" /><span>{formatDate(event.date)}</span></div>
                      <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#FFFF00]" /><span>{event.time}</span></div>
                      <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#FFFF00]" /><span>{event.location}</span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section - Subscribe Only */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.6 }} 
          className="mt-12 text-center p-12 from-[#161616] to-transparent border border-[#606060]/20 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-[#F7F7F7] mb-4">Never Miss an Event</h3>
          <p className="text-[#F7F7F7]/70 mb-8">Click below to add our team schedule directly to your Google Calendar.</p>
          
          <motion.a
            href="https://calendar.google.com/calendar/u/2?cid=b3JvdHJpa2ltQGdtYWlsLmNvbQ"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-4 bg-[#FFFF00] text-black font-bold rounded-xl hover:bg-[#FFFF00]/90 transition-all shadow-xl shadow-[#FFFF00]/10"
          >
            SUBSCRIBE TO CALENDAR
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}