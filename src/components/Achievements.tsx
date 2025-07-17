import React, { useState } from 'react';
import { Medal, Trophy, Award, Star, Crown, Target, Users, Zap, Globe, Code, Brain, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const achievements = [
    // IEEE Leadership & Recognition
    {
      title: "IEEE Madras Section Student Coordination Team 2024",
      category: "IEEE Leadership",
      type: "Core Team Member",
      year: "2024",
      description: "Selected as core team member for IEEE Madras Section Student Coordination Team, leading student initiatives across the region.",
      icon: <Crown className="w-6 h-6" />,
      color: "purple",
      priority: "high",
      image: "/src/images/sac.jpg"
    },
    {
      title: "IEEE SB Best Student Chapter Award",
      category: "IEEE Recognition",
      type: "Award - $510 USD",
      year: "2024",
      description: "Received IEEE Student Branch Best Student Chapter Award worth $510 USD for outstanding chapter performance and leadership.",
      icon: <Trophy className="w-6 h-6" />,
      color: "yellow",
      priority: "high",
      image: "/src/images/sbc.jpg"
    },
    {
      title: "IEEE R10 HTA Fund Grant",
      category: "IEEE Funding",
      type: "Grant - $210 USD",
      year: "2024",
      description: "Awarded $210 from IEEE Region 10 Humanitarian Technology Activities Fund for innovative technology projects.",
      icon: <Target className="w-6 h-6" />,
      color: "green",
      priority: "high",
      image: "/src/images/hta.jpg"
    },
    {
      title: "IEEE Region 10 WIE Pre-University Champion 2023",
      category: "IEEE Competition",
      type: "Champion",
      year: "2023",
      description: "Champion in IEEE Region 10 Women in Engineering Pre-University competition, demonstrating excellence in STEM.",
      icon: <Medal className="w-6 h-6" />,
      color: "pink",
      priority: "high",
      image: "/src/images/preu.jpg"
    },
    {
      title: "IEEE Region 10 WIE Pro-University Champion 2023",
      category: "IEEE Competition",
      type: "Champion",
      year: "2023",
      description: "Champion in IEEE Region 10 Women in Engineering Pro-University competition, showcasing professional development.",
      icon: <Star className="w-6 h-6" />,
      color: "purple",
      priority: "high",
      image: "/src/images/prou.jpg"
    },
    {
      title: "Smart India Hackathon Finalist 2024",
      category: "National Hackathon",
      type: "Finalist",
      year: "2024",
      description: "Selected as finalist in Smart India Hackathon 2024, India's biggest hackathon initiative by Government of India.",
      icon: <Brain className="w-6 h-6" />,
      color: "blue",
      priority: "high",
      image: "/src/images/sih24.jpg"
    },
    {
      title: "Smart India Hackathon Finalist 2023",
      category: "National Hackathon",
      type: "Finalist",
      year: "2023",
      description: "Achieved finalist status in Smart India Hackathon 2023, demonstrating innovative problem-solving capabilities.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "orange",
      priority: "high",
      image: "/src/images/sih23.jpg"
    },
    {
      title: "Hindustan ITS Project Presentation",
      category: "Technical Competition",
      type: "1st Place",
      year: "2024",
      description: "First place winner in Hindustan Institute of Technology project presentation competition.",
      icon: <Trophy className="w-6 h-6" />,
      color: "gold",
      priority: "medium",
      image: "/src/images/hit.jpg"
    },
    {
      title: "SRM Pinnacle 24",
      category: "Technical Competition",
      type: "1st Place",
      year: "2024",
      description: "First place winner at SRM Pinnacle 24, showcasing technical excellence and innovation.",
      icon: <Award className="w-6 h-6" />,
      color: "blue",
      priority: "medium",
      image: "/src/images/srmp24.jpg"
    },
    {
      title: "SVCE UPAGRAHA 23",
      category: "Technical Competition",
      type: "1st Prize",
      year: "2023",
      description: "First prize winner at SVCE UPAGRAHA 23 technical competition.",
      icon: <Star className="w-6 h-6" />,
      color: "teal",
      priority: "medium",
      image: "/src/images/svce.jpg"
    },
    {
      title: "SRM Technical Competition",
      category: "Technical Competition",
      type: "1st Prize",
      year: "2023",
      description: "First prize winner at SRM technical competition, demonstrating superior technical skills.",
      icon: <Code className="w-6 h-6" />,
      color: "green",
      priority: "medium",
      image: "/src/images/srm23.jpg"
    },
    {
      title: "Sairam Engineering College Competition",
      category: "Technical Competition",
      type: "1st Place",
      year: "2023",
      description: "First place winner at Sairam Engineering College technical competition.",
      icon: <Trophy className="w-6 h-6" />,
      color: "purple",
      priority: "medium",
      image: "/src/images/sai.jpg"
    },
    {
      title: "Intellects Hive 2K23 - Kings Engineering College",
      category: "Technical Competition",
      type: "1st Prize",
      year: "2023",
      description: "First prize winner at Intellects Hive 2K23 hosted by Kings Engineering College.",
      icon: <Brain className="w-6 h-6" />,
      color: "indigo",
      priority: "medium",
      image: "/src/images/kings.jpg"
    },
    {
      title: "CIT Jarvis 2K23",
      category: "Technical Competition",
      type: "1st Place",
      year: "2023",
      description: "First place winner at CIT Jarvis 2K23 technical event.",
      icon: <Zap className="w-6 h-6" />,
      color: "yellow",
      priority: "medium",
      image: "/src/images/cit.jpg"
    },
    {
      title: "IIT Madras Competition",
      category: "Prestigious Competition",
      type: "3rd Place",
      year: "2023",
      description: "Third place winner at IIT Madras technical competition, competing against top talent nationwide.",
      icon: <Medal className="w-6 h-6" />,
      color: "orange",
      priority: "high",
      image: "/src/images/iit.jpg"
    },
    {
      title: "Crescent IST Competition",
      category: "Technical Competition",
      type: "2nd Place",
      year: "2023",
      description: "Second place winner at Crescent Institute of Science and Technology competition.",
      icon: <Award className="w-6 h-6" />,
      color: "silver",
      priority: "medium",
      image: "/src/images/cres.jpg"
    },
    {
      title: "Saveetha University Garuda 2K23",
      category: "Technical Competition",
      type: "Overall Championship",
      year: "2023",
      description: "Overall Championship winner at Saveetha University Garuda 2K23, demonstrating comprehensive excellence.",
      icon: <Crown className="w-6 h-6" />,
      color: "gold",
      priority: "high",
      image: "/src/images/save.jpg"
    },
    {
      title: "PES NEXUS Symposium 2024 Jury Member",
      category: "Professional Recognition",
      type: "Jury Invitation",
      year: "2024",
      description: "Invited as jury member for PES NEXUS Symposium 2024, recognizing expertise and professional standing.",
      icon: <Users className="w-6 h-6" />,
      color: "purple",
      priority: "high",
      image: "/src/images/pes.jpg"
    },
    {
      title: "IIT E-Cell Bombay Ambassador",
      category: "Leadership Role",
      type: "Ambassador",
      year: "2023",
      description: "Selected as IIT Bombay Entrepreneurship Cell Ambassador, promoting innovation and startup culture.",
      icon: <Globe className="w-6 h-6" />,
      color: "blue",
      priority: "high",
      image: "/src/images/ecell.jpg"
    }
  ];

  // Group achievements into slides of 9 (3x3 grid)
  const achievementsPerSlide = 9;
  const totalSlides = Math.ceil(achievements.length / achievementsPerSlide);
  
  const getCurrentSlideAchievements = () => {
    const startIndex = currentSlide * achievementsPerSlide;
    return achievements.slice(startIndex, startIndex + achievementsPerSlide);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      purple: 'from-purple-400 to-purple-600',
      yellow: 'from-yellow-400 to-yellow-600',
      gold: 'from-yellow-400 to-orange-500',
      green: 'from-green-400 to-green-600',
      pink: 'from-pink-400 to-pink-600',
      blue: 'from-blue-400 to-blue-600',
      orange: 'from-orange-400 to-orange-600',
      teal: 'from-teal-400 to-teal-600',
      indigo: 'from-indigo-400 to-indigo-600',
      silver: 'from-gray-400 to-gray-600'
    };
    return colorMap[color] || 'from-gray-400 to-gray-600';
  };

  const getPriorityBadge = (priority: string) => {
    if (priority === 'high') {
      return (
        <div className="absolute -top-2 -right-2 z-20">
          <div className="w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
            <Star className="w-3 h-3 text-white" />
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="achievements" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-10 h-10 text-yellow-400 mr-3 animate-bounce hover:animate-spin" />
            <Crown className="w-8 h-8 text-purple-400 animate-pulse hover:animate-ping" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white section-heading">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive showcase of awards, competitions, and professional recognition across technical and leadership domains
          </p>
        </div>

        {/* Achievement Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-500 transition-colors duration-300">
            <div className="text-3xl font-bold text-yellow-400 mb-2">{achievements.length}</div>
            <div className="text-sm text-gray-400">Total Awards</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">$720</div>
            <div className="text-sm text-gray-400">Prize Money</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-sm text-gray-400">1st Places</div>
          </div>
          <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-green-500 transition-colors duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">2</div>
            <div className="text-sm text-gray-400">SIH Finalist</div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:scale-110"
            disabled={totalSlides <= 1}
          >
            <ChevronLeft className="w-6 h-6 text-gray-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/80 hover:bg-gray-700 rounded-full border border-gray-600 hover:border-purple-500 transition-all duration-300 hover:scale-110"
            disabled={totalSlides <= 1}
          >
            <ChevronRight className="w-6 h-6 text-gray-300" />
          </button>

          {/* Achievements Grid */}
          <div className="px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[600px]">
              {getCurrentSlideAchievements().map((achievement, index) => (
                <div
                  key={`${currentSlide}-${index}`}
                  className={`achievement-card group relative p-6 rounded-xl bg-gray-800/70 border border-gray-700 hover:border-${achievement.color}-500 transition-all duration-500 hover:scale-105 transform backdrop-blur-sm hover:shadow-2xl hover:shadow-${achievement.color}-500/30 animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {getPriorityBadge(achievement.priority)}
                  
                  <div className="relative z-10">
                    {/* Achievement Image */}
                    <div className="mb-4 relative overflow-hidden rounded-lg">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className={`absolute top-2 left-2 p-2 bg-gradient-to-r ${getColorClasses(achievement.color)} rounded-lg`}>
                        <div className="text-white">
                          {achievement.icon}
                        </div>
                      </div>
                      
                      {/* Type Badge */}
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 bg-${achievement.color}-500/90 text-white rounded-full text-xs font-semibold`}>
                          {achievement.type}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {achievement.category}
                      </span>
                      <span className="text-xs text-gray-500">{achievement.year}</span>
                    </div>
                    
                    <h3 className={`text-lg font-bold text-white group-hover:text-${achievement.color}-400 transition-colors duration-300 mb-2 line-clamp-2`}>
                      {achievement.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                      {achievement.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {[...Array(achievement.priority === 'high' ? 5 : 4)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <div className={`w-3 h-3 bg-${achievement.color}-500 rounded-full animate-pulse`}></div>
                    </div>
                  </div>

                  {/* Animated Background */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-${achievement.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        )}

        {/* Slide Counter */}
        <div className="text-center mt-4">
          <span className="text-sm text-gray-400">
            Slide {currentSlide + 1} of {totalSlides} • Showing {getCurrentSlideAchievements().length} achievements
          </span>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-pink-900/20 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-4">Continuous Excellence</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            These achievements represent a commitment to excellence, innovation, and leadership across technical and professional domains. Each recognition drives the pursuit of even greater impact.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white font-semibold">
              {achievements.length}+ Awards Won
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold">
              $720+ Prize Money
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;