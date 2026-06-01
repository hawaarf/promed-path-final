import React, { useState, useEffect } from 'react';
import {
  Target, Zap, Brain, CheckCircle2, Compass, Heart,
  FileEdit, ArrowRight, ArrowLeft, Award, Code, PenTool,
  Sparkles, Briefcase
} from 'lucide-react';
import { STREAM_QUESTIONS, STUDIO_QUESTIONS } from '../data/questions';
import PMCharacter from '../../imports/Group147/Group147';
import EngineerCharacter from '../../imports/Group148/Group148';
import ArtistCharacter from '../../imports/Group149/Group149';
import DesignerCharacter from '../../imports/Group150/Group150';
import Logo from '../../imports/Logo/Logo';

export const AssessmentFlow = ({ currentPage, navigateTo, STUDIOS }) => {
  const [streamAnswers, setStreamAnswers] = useState({});
  const [studioAnswers, setStudioAnswers] = useState({});
  const [stage, setStage] = useState(1); // 1 = Stream, 1.5 = Stream Result, 2 = Studio
  const [quizPage, setQuizPage] = useState(0); // Pagination within stage
  const [isCalculating, setIsCalculating] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [generalStream, setGeneralStream] = useState('');

  useEffect(() => {
    if (currentPage === 'assessment-intro') {
      setStreamAnswers({});
      setStudioAnswers({});
      setStage(1);
      setQuizPage(0);
      setIsAgreed(false);
    }
  }, [currentPage]);

  const handleStart = () => navigateTo('assessment-guidelines');

  const handleSelectRating = (questionId, rating) => {
    if (stage === 1) {
      setStreamAnswers(prev => ({ ...prev, [questionId]: rating }));
    } else {
      setStudioAnswers(prev => ({ ...prev, [questionId]: rating }));
    }
  };

  const currentQuestions = stage === 1 ? STREAM_QUESTIONS : STUDIO_QUESTIONS;
  const currentAnswers = stage === 1 ? streamAnswers : studioAnswers;
  const questionsPerPage = 10;
  const totalPages = Math.ceil(currentQuestions.length / questionsPerPage);

  const handleNextPage = () => {
    if (quizPage < totalPages - 1) {
      setQuizPage(prev => prev + 1);
      window.scrollTo(0, 0);
    } else if (stage === 1) {
      // NEW LOGIC: Calculate Stream Scores using Simple Accumulation (Q1-24)
      const streamScores = {
        'ENGINEER': 0,      // Q1-6 (str1-str6)
        'ARTIST': 0,        // Q7-12 (str7-str12)
        'DESIGNER': 0,      // Q13-18 (str13-str18)
        'PRODUCT MANAGER': 0 // Q19-24 (str19-str24)
      };

      // Accumulate scores for each stream
      STREAM_QUESTIONS.forEach((q, index) => {
        const rating = streamAnswers[q.id] || 0;

        if (index >= 0 && index <= 5) {
          // Q1-6: Engineer
          streamScores['ENGINEER'] += rating;
        } else if (index >= 6 && index <= 11) {
          // Q7-12: Artist
          streamScores['ARTIST'] += rating;
        } else if (index >= 12 && index <= 17) {
          // Q13-18: Designer
          streamScores['DESIGNER'] += rating;
        } else if (index >= 18 && index <= 23) {
          // Q19-24: Product Manager
          streamScores['PRODUCT MANAGER'] += rating;
        }
      });

      // Find the highest score(s)
      const maxScore = Math.max(...Object.values(streamScores));
      const topStreams = Object.keys(streamScores).filter(s => streamScores[s] === maxScore);

      let bestStream = 'ENGINEER';

      if (topStreams.length === 1) {
        // Dominan tunggal
        bestStream = topStreams[0];
      } else {
        // Tie-breaker logic
        const q25Answer = streamAnswers['str25'] || 3;

        if (topStreams.includes('DESIGNER') && topStreams.includes('PRODUCT MANAGER')) {
          // Seri Designer vs Product Manager: gunakan Q25
          bestStream = q25Answer >= 4 ? 'PRODUCT MANAGER' : 'DESIGNER';
        } else if (topStreams.includes('ENGINEER') && topStreams.includes('ARTIST')) {
          // Seri Engineer vs Artist: untuk sementara pilih Engineer (akan refined di studio selection)
          bestStream = 'ENGINEER';
        } else {
          // Default: pilih yang pertama dari topStreams
          bestStream = topStreams[0];
        }
      }

      setGeneralStream(bestStream);
      setStage(1.5);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevPage = () => {
    if (quizPage > 0) {
      setQuizPage(prev => prev - 1);
      window.scrollTo(0, 0);
    } else if (stage === 1.5) {
      setStage(1);
      setQuizPage(Math.ceil(STREAM_QUESTIONS.length / questionsPerPage) - 1);
      window.scrollTo(0, 0);
    } else if (stage === 2) {
      setStage(1.5);
      window.scrollTo(0, 0);
    }
  };

  const handleCalculate = () => {
    if (Object.keys(studioAnswers).length < STUDIO_QUESTIONS.length) {
      alert('Mohon jawab semua pertanyaan sebelum melihat hasil.');
      return;
    }
    
    setIsCalculating(true);
    navigateTo('assessment-result');
    setTimeout(() => {
      setIsCalculating(false);
    }, 2000);
  };

  const getResults = () => {
    // NEW LOGIC: Calculate Studio Average Scores (Q26-50 / std1-std25)
    const studioAverages = {
      'mosaic': 0,     // (std1 + std2) / 2
      'spice': 0,      // (std3 + std4) / 2
      'oxlab': 0,      // (std5 + std6) / 2
      'stage': 0,      // (std7 + std8) / 2
      'orangfilm': 0,  // (std9 + std10) / 2
      'pixelpals': 0,  // (std11 + std12) / 2
      'wire': 0,       // (std13 + std14) / 2
      'kuls': 0,       // (std15 + std16) / 2
      'tobo': 0,       // std17 (single)
      'icon': 0,       // std18 (single)
      'pojokomik': 0,  // (std19 + std20) / 2
      'mvp': 0,        // (std21 + std22) / 2
      'vote': 0,       // (std23 + std24) / 2
      'flui': 0        // std25 (single)
    };

    // Calculate averages for each studio
    studioAverages['mosaic'] = ((studioAnswers['std1'] || 0) + (studioAnswers['std2'] || 0)) / 2;
    studioAverages['spice'] = ((studioAnswers['std3'] || 0) + (studioAnswers['std4'] || 0)) / 2;
    studioAverages['oxlab'] = ((studioAnswers['std5'] || 0) + (studioAnswers['std6'] || 0)) / 2;
    studioAverages['stage'] = ((studioAnswers['std7'] || 0) + (studioAnswers['std8'] || 0)) / 2;
    studioAverages['orangfilm'] = ((studioAnswers['std9'] || 0) + (studioAnswers['std10'] || 0)) / 2;
    studioAverages['pixelpals'] = ((studioAnswers['std11'] || 0) + (studioAnswers['std12'] || 0)) / 2;
    studioAverages['wire'] = ((studioAnswers['std13'] || 0) + (studioAnswers['std14'] || 0)) / 2;
    studioAverages['kuls'] = ((studioAnswers['std15'] || 0) + (studioAnswers['std16'] || 0)) / 2;
    studioAverages['tobo'] = studioAnswers['std17'] || 0;
    studioAverages['icon'] = studioAnswers['std18'] || 0;
    studioAverages['pojokomik'] = ((studioAnswers['std19'] || 0) + (studioAnswers['std20'] || 0)) / 2;
    studioAverages['mvp'] = ((studioAnswers['std21'] || 0) + (studioAnswers['std22'] || 0)) / 2;
    studioAverages['vote'] = ((studioAnswers['std23'] || 0) + (studioAnswers['std24'] || 0)) / 2;
    studioAverages['flui'] = studioAnswers['std25'] || 0;

    // Convert averages to percentages (scale from 0-5 to percentage)
    // Average score 5.0 = 100%, 4.0 = 80%, 3.0 = 60%, etc.
    let scoredStudios = STUDIOS.map(studio => {
      const avgScore = studioAverages[studio.id] || 0;
      const basePercentage = Math.round((avgScore / 5) * 100);
      // Add small random variance (±5) for more natural feel
      const finalPercentage = Math.max(40, Math.min(99, basePercentage + Math.floor(Math.random() * 11 - 5)));

      return {
        ...studio,
        matchPercentage: finalPercentage,
        winningStream: generalStream,
        rawAverage: avgScore
      };
    });

    // Sort by match percentage
    scoredStudios.sort((a, b) => b.matchPercentage - a.matchPercentage);

    // Apply tie-breaker logic if top studios have same or very close scores
    const top3 = scoredStudios.slice(0, 3);

    // Check for ties in top 2
    if (Math.abs(top3[0].rawAverage - top3[1].rawAverage) < 0.3) {
      // Apply stream-based tie-breaker
      const studio1 = top3[0].id;
      const studio2 = top3[1].id;

      // Engineer vs Artist tie-breaker
      if (generalStream === 'ENGINEER' || generalStream === 'ARTIST') {
        const techStudios = ['mosaic', 'spice', 'oxlab'];
        const artStudios = ['orangfilm', 'pixelpals', 'stage', 'pojokomik'];

        if (generalStream === 'ENGINEER' && techStudios.includes(studio2) && !techStudios.includes(studio1)) {
          // Swap if studio2 is more tech-aligned
          [scoredStudios[0], scoredStudios[1]] = [scoredStudios[1], scoredStudios[0]];
        } else if (generalStream === 'ARTIST' && artStudios.includes(studio2) && !artStudios.includes(studio1)) {
          // Swap if studio2 is more art-aligned
          [scoredStudios[0], scoredStudios[1]] = [scoredStudios[1], scoredStudios[0]];
        }
      }
    }

    return scoredStudios.slice(0, 3);
  };

  if (currentPage === 'assessment-intro') {
    return (
      <div className="min-h-screen bg-white animate-in fade-in duration-500">

        {/* HERO SECTION - Similar to Homepage */}
        <section className="relative overflow-hidden bg-slate-50 pt-8 pb-12 md:py-12">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

          {/* Soft Background Globs */}
          <div className="absolute -top-32 -right-32 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#ebf0ff] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute top-48 -left-32 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">

              {/* Left Content */}
              <div className="lg:w-1/2 text-center lg:text-left pt-6">
                <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] md:leading-[1.1] mb-4 md:mb-6">
                  Bingung Pilih Peminatan? <br className="hidden md:block"/>
                  <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    Temukan Jawabannya!
                  </span>
                </h1>
                <p className="mt-4 text-sm sm:text-base md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed font-medium">
                  Kuis ini dirancang khusus untuk membantu Anda memahami gaya belajar, cara kerja, dan minat Anda. Terdiri dari 2 tahap dengan total 50 pertanyaan.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-4">
                  <button
                    onClick={handleStart}
                    className="w-full sm:w-auto px-5 py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full font-bold text-sm md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 shadow-xl flex items-center justify-center group flex-shrink-0"
                  >
                    Mulai Self-Assessment
                    <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Abstract Visual Hero */}
              <div className="order-first lg:order-last lg:w-1/2 w-full mt-4 lg:mt-0 relative h-[320px] md:h-[450px] flex items-center justify-center">
                {/* Center Main Badge */}
                <div className="absolute z-20 bg-white p-4 md:p-6 rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-2 md:mb-3 shadow-inner">
                    <Target className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <p className="font-extrabold text-slate-800 text-base md:text-lg">Ketahui Student Stream Anda</p>
                  <p className="text-xs md:text-sm font-medium text-slate-500">4 Stream Tersedia</p>
                </div>

                {/* Floating Element 1 - Engineer */}
                <div className="absolute z-10 top-[5%] md:top-[10%] left-[2%] md:left-[15%] bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2 md:gap-3 transform -rotate-6 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 group">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="font-bold text-slate-800 text-xs md:text-sm">Engineer</p>
                    <p className="text-[10px] md:text-xs font-medium text-slate-400">Technical</p>
                  </div>
                </div>

                {/* Floating Element 2 - Artist */}
                <div className="absolute z-30 bottom-[10%] md:bottom-[15%] left-0 md:left-[10%] bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2 md:gap-3 transform rotate-3 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 group">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PenTool className="w-4 h-4 md:w-5 md:h-5 text-pink-600" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="font-bold text-slate-800 text-xs md:text-sm">Artist</p>
                    <p className="text-[10px] md:text-xs font-medium text-slate-400">Creative</p>
                  </div>
                </div>

                {/* Floating Element 3 - Designer */}
                <div className="absolute z-10 top-[15%] md:top-[20%] right-0 md:right-[5%] bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2 md:gap-3 transform rotate-6 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 group">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="font-bold text-slate-800 text-xs md:text-sm">Designer</p>
                    <p className="text-[10px] md:text-xs font-medium text-slate-400">UX/UI</p>
                  </div>
                </div>

                {/* Floating Element 4 - Product Manager */}
                <div className="absolute z-10 bottom-[15%] md:bottom-[20%] right-[2%] md:right-[5%] bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2 md:gap-3 transform -rotate-3 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 group">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                  </div>
                  <div className="hidden sm:block">
                    <p className="font-bold text-slate-800 text-xs md:text-sm leading-tight">
                      Product<br/>Manager
                    </p>
                    <p className="text-[10px] md:text-xs font-medium text-slate-400">Strategy</p>
                  </div>
                </div>

                {/* Decorative dotted circle */}
                <div className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full border-2 border-dashed border-slate-300 animate-spin-slow"></div>
                <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-slate-200 opacity-50"></div>
              </div>

            </div>
          </div>
        </section>

        <div className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Mengapa Anda Perlu Mengikuti Self-Assessment?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center flex flex-col items-center group hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pilihan Tepat</h3>
              <p className="text-slate-600 font-medium">Hindari penyesalan di kemudian hari. Kami membantu mengarahkan Anda ke studio yang prospeknya sesuai dengan tujuan karir Anda.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center flex flex-col items-center group hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sesuai Passion Anda</h3>
              <p className="text-slate-600 font-medium">Setiap studio memiliki karakteristik yang berbeda. Kuis ini mencocokkan kepribadian Anda dengan gaya belajar di setiap studio.</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center flex flex-col items-center group hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hasil Top 3 Akurat</h3>
              <p className="text-slate-600 font-medium">Sistem akan menghitung jawaban Anda dan memberikan 3 rekomendasi studio terbaik beserta persentase kecocokannya.</p>
            </div>
          </div>
        </div>

      </div>
    );
  }

  if (currentPage === 'assessment-guidelines') {
    return (
      <div className="min-h-[85vh] bg-slate-50 p-4 pt-6 md:pt-10 pb-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-slate-100 animate-in slide-in-from-bottom-8 duration-500">
           <div className="w-16 h-16 bg-[#ebf0ff] rounded-2xl flex items-center justify-center mb-6 md:mb-8">
             <FileEdit className="w-8 h-8 text-[#35489e]" />
           </div>
           <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">Panduan Pengisian</h2>
           <p className="text-slate-600 mb-8 font-medium text-base md:text-lg">Sebelum memulai, pastikan Anda memperhatikan beberapa hal berikut agar hasilnya maksimal dan akurat dalam menentukan peminatan Anda:</p>

           <ul className="space-y-6 mb-10">
             <li className="flex gap-4 items-start">
               <div className="w-10 h-10 bg-blue-50 text-[#35489e] rounded-full flex items-center justify-center font-extrabold flex-shrink-0 border border-blue-100">1</div>
               <p className="text-slate-700 font-bold text-sm md:text-lg pt-1.5">Jawab dengan jujur sesuai dengan yang Anda rasakan, bukan berdasarkan jawaban yang terdengar menarik atau atas pengaruh orang lain.</p>
             </li>
             <li className="flex gap-4 items-start">
               <div className="w-10 h-10 bg-blue-50 text-[#35489e] rounded-full flex items-center justify-center font-extrabold flex-shrink-0 border border-blue-100">2</div>
               <p className="text-slate-700 font-bold text-sm md:text-lg pt-1.5">Terdapat 2 tahap (Peran & Studio). Selesaikan kedua tahap hingga akhir agar hasil yang diperoleh akurat.</p>
             </li>
             <li className="flex gap-4 items-start">
               <div className="w-10 h-10 bg-blue-50 text-[#35489e] rounded-full flex items-center justify-center font-extrabold flex-shrink-0 border border-blue-100">3</div>
               <p className="text-slate-700 font-bold text-sm md:text-lg pt-1.5">Pilih skala yang paling mewakili diri Anda, dari sangat tidak setuju hingga sangat setuju.</p>
             </li>
           </ul>

           <label className="flex items-center gap-4 cursor-pointer p-4 md:p-5 bg-slate-50 rounded-2xl border border-slate-200 mb-10 hover:bg-slate-100 transition-colors">
             <input
               type="checkbox"
               className="w-6 h-6 rounded border-slate-300 text-[#35489e] focus:ring-[#35489e] accent-[#35489e] cursor-pointer"
               checked={isAgreed}
               onChange={(e) => setIsAgreed(e.target.checked)}
             />
             <span className="font-extrabold text-slate-800 text-base md:text-lg">Saya sudah memahami panduan dan siap mengisi.</span>
           </label>

           <div className="flex flex-col sm:flex-row gap-4">
             <button onClick={() => navigateTo('assessment-intro')} className="px-8 py-3.5 md:py-4 rounded-full font-bold text-slate-600 bg-slate-200 hover:bg-slate-300 transition-all text-center">Kembali</button>
             <button 
               onClick={() => navigateTo('assessment-quiz')} 
               disabled={!isAgreed} 
               className={`px-8 py-3.5 md:px-10 md:py-4 rounded-full font-extrabold text-base md:text-lg transition-all flex-grow text-center flex justify-center items-center ${isAgreed ? 'bg-[#35489e] text-white hover:bg-[#243376] shadow-lg shadow-[#35489e]/30' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
             >
               Mulai Kuis Sekarang <ArrowRight className="w-5 h-5 ml-2" />
             </button>
           </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'assessment-quiz') {
    if (stage === 1.5) {
      let CharacterComponent = EngineerCharacter;
      if (generalStream === 'PRODUCT MANAGER') CharacterComponent = PMCharacter;
      else if (generalStream === 'ARTIST') CharacterComponent = ArtistCharacter;
      else if (generalStream === 'DESIGNER') CharacterComponent = DesignerCharacter;

      return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100 max-w-2xl w-full text-center relative overflow-hidden animate-in zoom-in-95 duration-500">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#ebf0ff] to-transparent opacity-50 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-500 mb-2">Hasil Tahap 1: Anda adalah seorang...</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#35489e] mb-8 tracking-tight leading-tight">
                {generalStream === 'PRODUCT MANAGER' ? (
                  <>PRODUCT<br/>MANAGER!</>
                ) : (
                  <span className="whitespace-nowrap">{generalStream}!</span>
                )}
              </h1>

              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 bg-blue-50/50 rounded-full flex items-center justify-center border-4 border-white shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-20"></div>
                <div className="scale-[1.3] flex items-center justify-center translate-y-3 w-32 h-32 md:w-40 md:h-40">
                  <CharacterComponent />
                </div>
              </div>

              <p className="text-slate-600 font-medium text-lg md:text-xl mb-10 max-w-lg mx-auto">
                Selamat! Sekarang mari kita tentukan Studio mana yang paling sesuai untuk Anda mengembangkan karir sebagai <span className="font-bold text-[#35489e]">{generalStream === 'PRODUCT MANAGER' ? 'PRODUCT MANAGER' : generalStream}</span>.
              </p>

              <button
                onClick={() => {
                  setStage(2);
                  setQuizPage(0);
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto px-8 py-4 bg-[#35489e] text-white rounded-full font-bold text-lg md:text-xl hover:bg-[#243376] transition-all hover:scale-105 shadow-xl shadow-[#35489e]/30 flex items-center justify-center mx-auto group"
              >
                Lanjut ke Tahap 2: Pilih Studio
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    const answeredCount = stage === 1 ? Object.keys(streamAnswers).length : Object.keys(studioAnswers).length;
    const progress = (answeredCount / currentQuestions.length) * 100;
    
    const startIdx = quizPage * questionsPerPage;
    const endIdx = startIdx + questionsPerPage;
    const displayedQuestions = currentQuestions.slice(startIdx, endIdx);
    
    const isCurrentPageComplete = displayedQuestions.every(q => currentAnswers[q.id]);
    const isAllCompleteStage2 = stage === 2 && Object.keys(studioAnswers).length === STUDIO_QUESTIONS.length;

    return (
      <div className="min-h-screen bg-slate-50 py-8 md:py-12 relative animate-in fade-in duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-2">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 text-center md:text-left">Self-Assessment Peminatan</h1>
            <span className="text-sm md:text-base font-bold px-3 py-1 bg-blue-100 text-[#35489e] rounded-full inline-block text-center w-fit mx-auto md:mx-0">
              Tahap {stage}: {stage === 1 ? 'Peminatan Peran (25 Pertanyaan)' : 'Peminatan Studio (25 Pertanyaan)'}
            </span>
          </div>

          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-200 sticky top-20 z-40 mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm md:text-base font-bold text-slate-700">Menampilkan {startIdx + 1}-{Math.min(endIdx, currentQuestions.length)} dari {currentQuestions.length}</span>
              <span className="text-sm md:text-base font-bold text-[#35489e]">{Math.round(progress)}% Selesai Tahap Ini</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5">
              <div className="bg-[#35489e] h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-3 text-center md:text-left">Jawab semua pernyataan di bawah untuk melanjutkan ke tahap berikutnya.</p>
          </div>

          <div className="space-y-6 md:space-y-8 pb-10">
            {displayedQuestions.map((q, index) => {
               const currentVal = currentAnswers[q.id];
               const globalIndex = startIdx + index + 1;

               return (
                 <div key={q.id} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                    <p className="text-base md:text-xl font-bold text-slate-900 text-center mb-8 md:mb-10 leading-relaxed px-2">
                       {globalIndex}. {q.question}
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-2 md:px-8">
                       <span className="text-xs font-bold text-rose-500 uppercase tracking-wider hidden md:block w-24 text-right">Sangat Tidak Setuju</span>
                       
                       <div className="flex justify-between w-full md:w-auto gap-3 md:gap-6 relative">
                         <div className="hidden md:block absolute top-1/2 left-4 right-4 h-1 bg-slate-100 -z-10 transform -translate-y-1/2"></div>
                         
                         {[1, 2, 3, 4, 5].map((val) => {
                            const isSelected = currentVal === val;
                            let sizeClass = "w-8 h-8 md:w-10 md:h-10"; 
                            let colorClass = "border-slate-300 bg-white";
                            
                            if (val === 1) { sizeClass = "w-10 h-10 md:w-14 md:h-14"; colorClass = isSelected ? "border-rose-500 bg-rose-500" : "border-rose-500 bg-white hover:bg-rose-50"; }
                            if (val === 2) { sizeClass = "w-9 h-9 md:w-12 md:h-12"; colorClass = isSelected ? "border-rose-400 bg-rose-400" : "border-rose-400 bg-white hover:bg-rose-50"; }
                            if (val === 3) { sizeClass = "w-8 h-8 md:w-10 md:h-10"; colorClass = isSelected ? "border-slate-400 bg-slate-400" : "border-slate-300 bg-white hover:bg-slate-100"; }
                            if (val === 4) { sizeClass = "w-9 h-9 md:w-12 md:h-12"; colorClass = isSelected ? "border-emerald-400 bg-emerald-400" : "border-emerald-400 bg-white hover:bg-emerald-50"; }
                            if (val === 5) { sizeClass = "w-10 h-10 md:w-14 md:h-14"; colorClass = isSelected ? "border-emerald-500 bg-emerald-500" : "border-emerald-500 bg-white hover:bg-emerald-50"; }

                            return (
                              <button
                                key={val}
                                onClick={() => handleSelectRating(q.id, val)}
                                className={`rounded-full border-[3px] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 flex items-center justify-center shadow-sm ${sizeClass} ${colorClass} ${isSelected ? 'scale-110 shadow-md' : 'hover:scale-105'}`}
                              >
                                 {isSelected && <CheckCircle2 className="w-1/2 h-1/2 text-white" />}
                              </button>
                            );
                         })}
                       </div>

                       <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider hidden md:block w-24 text-left">Sangat Setuju</span>
                       
                       <div className="flex justify-between w-full md:hidden text-[10px] font-bold uppercase tracking-wide">
                          <span className="text-rose-500 w-20 text-center">Tdk Setuju</span>
                          <span className="text-emerald-600 w-20 text-center">Setuju</span>
                       </div>
                    </div>
                 </div>
               )
            })}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pb-20 gap-4">
             {quizPage > 0 || stage > 1 ? (
               <button
                  onClick={handlePrevPage}
                  className="px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base bg-slate-200 text-slate-600 hover:bg-slate-300 transition-all flex items-center w-full sm:w-auto justify-center"
               >
                  <ArrowLeft className="w-5 h-5 mr-2" /> Kembali
               </button>
             ) : <div className="hidden sm:block"></div>}

             {quizPage === totalPages - 1 && stage === 2 ? (
               <button
                  onClick={handleCalculate}
                  disabled={!isAllCompleteStage2}
                  className={`px-8 py-3.5 md:px-12 md:py-4 rounded-full font-bold text-sm md:text-base transition-all flex items-center w-full sm:w-auto justify-center shadow-lg ${
                    isAllCompleteStage2 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/30 hover:-translate-y-1' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                  }`}
                >
                  Lihat Hasil Kecocokan
               </button>
             ) : (
               <button
                  onClick={handleNextPage}
                  disabled={!isCurrentPageComplete}
                  className={`px-8 py-3.5 md:px-12 md:py-4 rounded-full font-bold text-sm md:text-base transition-all flex items-center w-full sm:w-auto justify-center shadow-lg ${
                    isCurrentPageComplete 
                      ? 'bg-[#35489e] text-white hover:bg-[#243376] shadow-[#35489e]/30 hover:-translate-y-1' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                  }`}
               >
                  {quizPage === totalPages - 1 && stage === 1 ? 'Lanjut Tahap 2' : 'Selanjutnya'} <ArrowRight className="w-5 h-5 ml-2" />
               </button>
             )}
          </div>

        </div>
      </div>
    );
  }

  if (currentPage === 'assessment-result') {
    if (isCalculating) {
      return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center bg-slate-50 p-4">
           <div className="animate-spin w-16 h-16 md:w-20 md:h-20 border-4 border-[#cdd6ec] border-t-[#35489e] rounded-full mb-6 md:mb-8"></div>
           <h2 className="text-2xl md:text-3xl font-bold text-slate-900 animate-pulse text-center">Mohon tunggu, sedang menghitung...</h2>
           <p className="text-slate-500 mt-2 md:mt-3 font-medium text-base md:text-lg text-center">Menganalisis 50 jawaban Anda dari 4 peran dan 14 Studio</p>
        </div>
      );
    }

    const topStudios = getResults();
    const top1 = topStudios[0];

    let CharacterComponent = EngineerCharacter;
    if (generalStream === 'PRODUCT MANAGER') CharacterComponent = PMCharacter;
    else if (generalStream === 'ARTIST') CharacterComponent = ArtistCharacter;
    else if (generalStream === 'DESIGNER') CharacterComponent = DesignerCharacter;

    return (
      <div className="min-h-screen bg-slate-50 py-10 md:py-16 animate-in zoom-in-95 duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 md:mb-4 tracking-tight">Ini Hasil Anda</h1>
            <p className="text-[14px] sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium px-2 leading-relaxed">
              Berdasarkan jawaban yang telah diberikan, sistem kami telah menganalisis peran dan studio yang paling sesuai dengan kepribadian dan gaya kerja Anda.
            </p>
          </div>

          <div className="mb-8 md:mb-12">
            <div
              className={`${top1.color} rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-6 md:gap-8 items-center border-4 border-purple-200`}
            >

              <div className="absolute -top-20 -right-20 md:-top-32 md:-right-32 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 md:-bottom-32 md:-left-32 w-64 h-64 md:w-96 md:h-96 bg-black/10 rounded-full blur-3xl pointer-events-none"></div>

              <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start z-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center whitespace-nowrap bg-yellow-400 text-yellow-900 font-bold px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest shadow-lg">
                  <Award className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" /> Paling Cocok
                </div>

                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-[2rem] bg-white flex items-center justify-center shadow-xl mb-4 md:mb-6">
                  <top1.icon className="w-12 h-12 md:w-16 md:h-16" />
                </div>

                <div className="text-white">
                  <span className="block text-5xl md:text-6xl font-extrabold">{top1.matchPercentage}%</span>
                  <span className="text-xs md:text-sm font-bold text-white/70 uppercase tracking-widest">Tingkat Kecocokan</span>
                </div>
              </div>

              <div className="w-full lg:w-2/3 z-10 text-center lg:text-left">
                <p className="text-white/80 font-bold text-sm md:text-lg mb-1 md:mb-2 uppercase tracking-wider">{top1.focus}</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">{top1.name}</h2>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-2xl mb-6 md:mb-8 text-left">
                  <h3 className="text-yellow-400 font-bold text-base md:text-lg mb-4 leading-snug break-words">
                     Anda adalah seorang <span className="underline decoration-wavy decoration-white/50 mx-1">{generalStream}</span> di Studio {top1.name}
                  </h3>
                  <p className="text-white font-medium text-sm md:text-lg leading-relaxed">
                    {top1.shortDesc}
                  </p>
                </div>

                <button
                  onClick={() => navigateTo('studio-detail', top1)}
                  className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-white text-slate-900 rounded-full font-bold text-base md:text-lg hover:bg-white/90 transition-colors shadow-lg"
                >
                  Pelajari Lebih Lanjut Tentang {top1.name}
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mb-6 md:mb-8">
             <h3 className="text-xl md:text-2xl font-bold text-slate-800">Alternatif Studio Lainnya</h3>
             <p className="text-sm md:text-base text-slate-500 font-medium px-2">Jika masih ingin mempertimbangkan pilihan lain, dua studio berikut juga memiliki persentase kecocokan yang tinggi dengan profil Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16">
            {topStudios.slice(1).map((studio) => (
              <div
                key={studio.id}
                className={`${studio.color} rounded-3xl md:rounded-[2rem] p-6 md:p-8 border-4 border-white/30 shadow-lg relative overflow-hidden flex flex-col transition-all hover:shadow-2xl hover:-translate-y-1 group`}
              >
                {/* Background decorations */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex justify-between items-start mb-5 md:mb-6 z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center bg-white shadow-lg">
                     <studio.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl md:text-3xl font-extrabold text-white">{studio.matchPercentage}%</span>
                    <span className="text-[10px] md:text-[11px] font-bold text-white/70 uppercase tracking-widest">Match</span>
                  </div>
                </div>

                <div className="z-10 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 transition-colors">{studio.name}</h3>
                  <p className="text-white/80 font-bold text-xs md:text-[14px] mb-3 md:mb-4">{studio.focus}</p>

                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl mb-4 border border-white/20">
                    <p className="text-white font-bold text-sm mb-1 leading-snug break-words">
                      Anda adalah seorang <span className="underline decoration-wavy decoration-yellow-300">{generalStream}</span> di Studio <span className="font-bold">{studio.name}</span>
                    </p>
                  </div>

                  <p className="text-white/90 font-medium text-xs md:text-[14px] leading-relaxed">
                     {studio.shortDesc}
                  </p>
                </div>

                <button
                  onClick={() => navigateTo('studio-detail', studio)}
                  className="mt-5 md:mt-6 w-full py-3 md:py-3.5 rounded-xl font-bold text-xs md:text-[14px] bg-white text-slate-900 hover:bg-white/90 transition-colors z-10 shadow-md"
                >
                  Lihat Detail {studio.name}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-white p-6 md:p-8 rounded-3xl border border-slate-100 max-w-lg mx-auto shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2 text-sm md:text-base">Ingin mengulang asesmen untuk hasil yang berbeda?</h3>
            <button
              onClick={() => navigateTo('assessment-intro')}
              className="text-[#35489e] hover:text-[#243376] font-bold text-sm md:text-base underline decoration-2 underline-offset-4"
            >
              Ulangi Asesmen
            </button>
          </div>

        </div>
      </div>
    );
  }

  return null;
};
