import { STUDIO_QUESTIONS, STREAM_QUESTIONS } from '../../app/data/questions';
import { AssessmentFlow as NewAssessmentFlow } from '../../app/components/AssessmentFlow';
import { BackgroundMusic } from '../../app/components/BackgroundMusic';
import { AnnouncementPopup } from '../../app/components/AnnouncementPopup';
import promedJingle from '../Map Your Future_MASTER_v1.0 (1).wav';
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Search, Filter, BookOpen, Users, Building, 
  ChevronRight, ArrowLeft, CheckCircle2, PlayCircle, Briefcase, 
  Lightbulb, GraduationCap, Instagram, Music, MonitorPlay, 
  Gamepad2, Camera, PenTool, Sparkles, Code, Globe, 
  MessageSquare, Presentation, Cpu, Target, Rocket, Mail,
  Zap, Heart, Brain, Compass, Home, LayoutGrid, FileEdit, Award,
  Menu, X, Linkedin, X as XIcon
} from 'lucide-react';
import Logo from '../Logo/Logo';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { StudioDetailView } from '../../app/components/StudioDetailView';
import { MVPIcon } from '../../app/components/MVPIcon';
import { MosaicIcon } from '../../app/components/MosaicIcon';
import { VoteIcon } from '../../app/components/VoteIcon';
import { IconMediaIcon } from '../../app/components/IconMediaIcon';
import { ToboIcon } from '../../app/components/ToboIcon';
import { OrangFilmIcon } from '../../app/components/OrangFilmIcon';
import { PixelPalsIcon } from '../../app/components/PixelPalsIcon';
import { PojokomikIcon } from '../../app/components/PojokomikIcon';
import { FluiIcon } from '../../app/components/FluiIcon';
import { SpiceIcon } from '../../app/components/SpiceIcon';
import { OxLabIcon } from '../../app/components/OxLabIcon';
import { WireIcon } from '../../app/components/WireIcon';
import { KulsIcon } from '../../app/components/KulsIcon';
import { StageIcon } from '../../app/components/StageIcon';

// --- DATA MOCKUP (WITH GEN-Z CASUAL COPYWRITING, PERSONAS & ALUMNI LIST) ---

export const STUDIOS = [
  {
    id: 'mvp',
    name: 'MVP E-Sports',
    focus: 'E-Sports Management',
    icon: MVPIcon,
    color: 'bg-[#1a2847]',
    ig: '@mvpesports.ui',
    tiktok: null,
    persona: 'Si Suhu Esports',
    matchReason: 'Anda memiliki jiwa kepemimpinan yang kuat dan tertarik mengatur strategi agar tim dapat meraih kemenangan di setiap turnamen.',
    shortDesc: 'MVP E-Sports merupakan studio di Produksi Media UI yang fokus mempelajari industri Esports di belakang layar. Mulai dari bisnis, event organizing, team management, dan lainnya.',
    overview: 'MVP E-Sports merupakan studio di Produksi Media UI yang fokus mempelajari industri Esports di belakang layar. Mulai dari bisnis, event organizing, team management, dan lainnya. Mahasiswa mendapat panduan mengenai banyak hal di Industri esports dengan para spesialis di Industri melalui MVP E-Sports.',
    dosenPembimbing: { name: 'Dr. Budi Santoso, M.Kom.', initial: 'BS' },
    dosenPeminatan: [
      { name: 'Andi Gunawan, M.Si.', initial: 'AG' }, 
      { name: 'Rina Melati, S.I.Kom.', initial: 'RM' }
    ],
    streams: ['Designer', 'Broadcasting & Talent', 'Technical Event Support'],
    alumniList: [
      { name: 'Rangga Dirgantara', role: 'Head of Esports', company: 'Rex Regum Qeon (RRQ)' },
      { name: 'Siska Meliana', role: 'Tournament Manager', company: 'Moonton Indonesia' },
      { name: 'Kevin Saputra', role: 'Shoutcaster', company: 'RevivaLTV' }
    ],
    careerPath: ['Event Organizer Esports', 'Desain Grafis Esports', 'Protokol Kesehatan Event Esports', 'Social Media Management Tim Esports', 'Business Development'],
    skills: ['Marketing & Brand Strategy', 'Esports Business', 'Event Organizing', 'Live Streaming Production', 'Shoutcasting & Casting Dasar', 'Player Management'],
    seniorInsight: [
      { text: 'Nama saya Naufal Ahmad Sanaya. Saya pernah berposisi sebagai Community Esports di EVOS, dengan pengalaman dalam membangun interaksi komunitas, mengelola engagement, serta mendukung berbagai aktivitas dan event esports. Saya terbiasa bekerja secara kolaboratif dan selalu mengikuti perkembangan industri esports yang dinamis.', author: 'Naufal Ahmad Sanaya, Promates 23' },
      { text: 'Kenalin, nama gue Raihan Saputra dari Produksi Media angkatan 2023. Gue intern di divisi Event & Community RRQ. Selama intern di sana, pengalamannya benar-benar seru karena gue bisa terlibat langsung di berbagai event, ikut dalam proses persiapan sampai pelaksanaan, dan melihat secara langsung bagaimana event esports dikelola secara profesional.', author: 'Raihan Saputra, Promates 23' }
    ]
  },
  {
    id: 'mosaic',
    name: 'MOSAIC',
    focus: 'OTT & Media Intelligence',
    icon: MosaicIcon,
    color: 'bg-[#6b3cba]',
    ig: '@mosaic.ui',
    tiktok: null,
    persona: 'Si Paling Data',
    matchReason: 'Anda memiliki kemampuan analisis yang tajam dan lebih mempercayai data objektif daripada asumsi semata.',
    shortDesc: 'Peminatan OTT (Over-The-Top Streaming) dan MI (Media Intelligence) Produksi Media berfokus pada pengembangan keterampilan manajerial dan teknis dalam mengelola-mengolah-menganalisis data serta informasi digital dalam ranah platform streaming dan media sosial.',
    overview: 'Peminatan OTT (Over-The-Top Streaming) dan MI (Media Intelligence) Produksi Media berfokus pada pengembangan keterampilan manajerial dan teknis dalam mengelola-mengolah-menganalisis data serta informasi digital dalam ranah platform streaming dan media sosial. Mahasiswa di peminatan ini mempelajari berbagai aspek seperti data analytics, data processing, data observation, validasi data, dan sebagainya.',
    dosenPembimbing: { name: 'Prof. Dr. Ir. Mediawati', initial: 'MW' },
    dosenPeminatan: [
      { name: 'Fahri Hamzah, Ph.D.', initial: 'FH' }, 
      { name: 'Siska Analytics, M.Sc.', initial: 'SA' }
    ],
    streams: ['Over-The-Top (OTT)', 'Media Intelligence (MI)'],
    alumniList: [
      { name: 'Amanda Putri', role: 'Data Analyst', company: 'Netflix Indonesia' },
      { name: 'Reza Rahardian', role: 'Content Strategist', company: 'Vidio' }
    ],
    careerPath: ['Media Data Analyst', 'Media Intelligence/Research Analyst', 'Media Strategist', 'Media Workflow Specialist', 'Digital Asset Manager', 'Content Acquisition Executive', 'Audio/Music Content Strategist', 'Consumer Insights Manager', 'Programmatic Ad Strategist'],
    skills: ['Data Analysis (Python/SQL)', 'Artificial Intelligence', 'Cloud Computing & NLP', 'Microsoft Excel', 'OTT Market', 'KPI Metrics', 'Gamification'],
    seniorInsight: [
      { text: 'Saat Intern, saya melakukan research saat terjadi krisis brand air mineral: Aqua saat digerebek oleh gubernur Jawa Barat. Melakukan data scraping menggunakan tools dan coding, data analysis, dan sentiments evaluation.', author: 'Renata Trixie Maran, Promates 23' }
    ]
  },
  {
    id: 'vote',
    name: 'VOTE. Media',
    focus: 'Digital Journalism',
    icon: VoteIcon,
    color: 'bg-[#6366f1]',
    ig: '@votemedia.id',
    tiktok: '@votemedia.id',
    persona: 'Si Pencari Fakta',
    matchReason: 'Anda memiliki rasa ingin tahu yang tinggi dan tidak mudah terpengaruh hoaks. Sikap kritis Anda sangat cocok untuk menjadi jurnalis masa kini.',
    shortDesc: 'VOTE Media merupakan studio yang dirancang untuk mempersiapkan mahasiswa dalam menghadapi dinamika dunia jurnalistik di era digital.',
    overview: 'VOTE Media merupakan studio yang dirancang untuk mempersiapkan mahasiswa dalam menghadapi dinamika dunia jurnalistik di era digital. Mahasiswa di peminatan ini mempelajari berbagai aspek seperti copywriting, kode etik jurnalis, anti-plagiarisme, algoritma jurnalisme digital, dan sebagainya.',
    dosenPembimbing: { name: 'Najwa Shihab, S.H., LL.M.', initial: 'NS' },
    dosenPeminatan: [
      { name: 'Arief Suditomo', initial: 'AS' }, 
      { name: 'Kania Sutisnawinata', initial: 'KS' }
    ],
    streams: ['Product/Project Manager', 'Artist'],
    alumniList: [
      { name: 'Dimas Anggara', role: 'Multimedia Journalist', company: 'Narasi TV' },
      { name: 'Putri Marino', role: 'News Producer', company: 'Kumparan' },
      { name: 'Iqbaal Ramadhan', role: 'Fact Checker', company: 'Tirto.id' }
    ],
    careerPath: ['Digital Journalist', 'Copywriter', 'Content Writer', 'Reporter', 'Public Relation Specialist', 'Social Media Manager', 'Presenter', 'Announcer', 'Production Assistant', 'Producer', 'Camera Person'],
    skills: ['Writing', 'Photography', 'Graphic Design', 'Videography', 'Public Speaking', 'Communication', 'Empathy', 'Time Management', 'Critical Thinking'],
    seniorInsight: [
      { text: 'Pengalaman magang di SEA Today sangat berbeda jauh dibandingkan ketika berada di kelas. Selama magang, saya terlibat dalam berbagai aktivitas yang membuat pemahaman saya terhadap alur produksi berita jadi lebih kompleks. Saya jadi lebih memahami pentingnya akurasi, etika, dan relevansi konten, yang menjadi bekal penting untuk menghadapi dunia kerja ke depannya.', author: 'Rui Gabriel Duarte, Promates 22' },
      { text: 'Selain jadi Production Assistant, aku juga dikasih kesempatan sama Mba Ade buat ikut ke Istana Merdeka di HUT RI, dan juga ikut reporting dari lapangan selama seminggu. Kalau dari aku, internship ini bedanya dengan tugas kuliah adalah kita punya tanggung jawab yang nyata, lingkungan yang ngebuat aku harus lebih adaptif sama rekan, pekerjaan, termasuk dengan alat produksi yang digunakan.', author: 'Anggie Agustian Wijaya, Promates 21' },
      { text: 'Selama magang saya sangat berkontribusi aktif dalam liputan langsung pertandingan sepak bola dan konferensi pers. Menulis berita dan artikel fitur berdasarkan liputan langsung, wawancara, dan pernyataan pers. Memilih dan memproduksi cuplikan video yang berpotensi viral, mengadaptasinya menjadi konten yang menarik dan sesuai platform dengan keterangan yang dibuat dengan baik.', author: 'Sayid Taqiyuddin Al Ghifari, Promates 23' },
      { text: 'Di SEA Today belajar corporate culture sama mental, belajar environment news production itu gimana, dari lapangan ke newsroom sampai ke depan mata penonton. Saya bekerja di akun TikTok @andoviandreasshow dan saya di sana jadi producer short content. Jurnalistik ada di setiap aspek di hidup kita, jangan terpaku sama berita, TV, dan radio.', author: 'Jalaluddin Rumi A, Promates 21' },
      { text: 'Pokoknyaa aku di magang tuh tugasnya kaya ngecompile semua asset berita, mulai dari foto/video bahan berita, naskah berita, rekaman, ngereach editor dsb. Pas berita sedang on air pun aku ada tugas untuk memegang cue prompter untuk dibaca sama host, sampe beritanya selesai. Setelah berita selesai semua, aku juga masih ada tugas untuk mencatat evaluasi dari host dan produser.', author: 'Muhammad Faiq Kenzie, Promates 21' },
      { text: 'Seru dan belajar hal banyak terutama penyesuaian dengan dunia kerja. Kebetulan, aku dapat shift dini hari dari jam 00.00 s/d 10.00 pagi. Hal tersebut menantang, supaya aku tidak mengantuk dan tetap fit saat menjalani magang.', author: 'Sebastian Imanuel GT Hutabarat, Promates 22' },
      { text: 'Seru parah, rekomen untuk orang yang suka "manusia", kayak bangun siang terus masuk jam 2 siang sampai jam 8 malam! Suka eksplor banyak topik sensitif.', author: 'Hanifa Retriani, Promates 23' },
      { text: 'Seru banget bisa nambah koneksi dan dapet tim yang seru banget!', author: 'Dhynara Xylya Darmasavier, Promates 23' },
      { text: 'Dan kebetulan megang 4 program sekaligus di dalam 1 departemen. Skill yang harus dipelajarin mungkin untuk saat ini seperti penulisan untuk sosial media/scripting, editing content atau editing per episode yang perlu tayang, gaya komunikasi untuk mempresentasikan ide episode untuk tayang di minggu depan. Keberuntungannya dapat perusahaan yang benar-benar nganggap semua yang kerja di situ sebagai keluarga besar.', author: 'Muhammad Yusuf Zachki Gunawan, Promates 23' }
    ]
  },
  {
    id: 'icon',
    name: 'ICON',
    focus: 'IP & Media Conversion',
    icon: IconMediaIcon,
    color: 'bg-[#1e2847]',
    ig: '@ui.icon',
    tiktok: null,
    persona: 'Si Kreator Franchise',
    matchReason: 'Anda memiliki ide yang sangat kreatif dan memahami cara mengembangkan sebuah karakter menjadi produk yang dapat dijual ke berbagai bentuk media.',
    shortDesc: 'ICON.UI adalah studio kreatif berbasis pengembangan IP yang tidak hanya berfokus pada produksi karya, tetapi juga membangun ide menjadi ekosistem media lintas platform melalui konsep media conversion.',
    overview: 'ICON.UI adalah studio kreatif berbasis pengembangan IP yang tidak hanya berfokus pada produksi karya, tetapi juga membangun ide menjadi ekosistem media lintas platform melalui konsep media conversion. Dengan menggabungkan kreativitas, strategi, dan manajemen seperti di industri nyata, ICON.UI mendorong mahasiswa untuk menciptakan karya yang tidak hanya menarik secara visual, tetapi juga scalable, berkelanjutan, dan memiliki nilai sebagai produk di industri kreatif.',
    dosenPembimbing: { name: 'Dr. IP Creator', initial: 'IC' },
    dosenPeminatan: [
      { name: 'Bapak Lisensi', initial: 'BL' }, 
      { name: 'Ibu Transmedia', initial: 'IT' }
    ],
    streams: ['Product Manager'],
    alumniList: [
      { name: 'Tara Basro', role: 'Creative Producer', company: 'BumiLangit Studios' },
      { name: 'Angga Yunanda', role: 'IP Manager', company: 'Visinema Pictures' }
    ],
    careerPath: ['IP Manager/Consultant', 'Corporate Social Responsibility Manager', 'Licensing Specialist', 'NFT Strategist/Consultant', 'Installation Artist', 'Media Sustainability', 'Exhibition Designer', 'Product Designer', 'Art Curator', 'Blockchain Developer', 'Visual Merchandiser', 'Lean Manufacturing Engineer'],
    skills: ['Data Analysis & Performance Tracking', 'Creative Asset Management', 'Market Research & Audience Analysis', 'Product Development & Roadmapping', 'Monetization Strategy & Business Modeling', 'Basic Legal & IP Rights Management', 'Go-To-Market Strategy'],
    seniorInsight: [
      { text: 'Menjadi bagian dari tim Digital Marketing AKG Entertainment adalah sebuah kebanggaan. Dari mengelola konten IP global hingga terlibat dalam event berskala besar, setiap tantangan yang diberikan membantu saya berkembang menjadi praktisi media yang lebih kritis dan kreatif. Pengalaman yang luar biasa!', author: 'Salsabila Nathania P, Promates 23' },
      { text: 'Berkesempatan intern di Endgame memberikan saya pengalaman belajar yang luas, serta pengalaman mengelola komunitas dan memahami ekosistem intellectual property (IP). Saya juga berkesempatan bertemu dengan berbagai tokoh penting.', author: 'Fathimah Zahra Faizah, Promates 23' },
      { text: 'Magang di Faber-Castell Indonesia jadi salah satu pengalaman yang berharga buat saya. Di program magang ini saya bisa mengimplementasikan ilmu-ilmu yang sudah saya dapat di kampus ke dunia kerja. Saya juga belajar banyak hal tentang dunia kerja yang mungkin belum diajarkan di kampus sebelumnya.', author: 'Raden Roro Jasmine Aulia AS, Promates 23' },
      { text: 'Magang di Emway sangat insightful karena di sana banyak sekali IP-IP mainan sehingga saya bisa belajar bagaimana masing-masing IP tersebut dipasarkan.', author: 'Muhammad Atana Ridhoka, Promates 23' },
      { text: 'Selama internship di Endgame, saya mendapatkan banyak pengalaman baru, terutama dalam mengelola komunitas dan memahami ekosistem intellectual property (IP). Saya juga punya kesempatan untuk bertemu dan belajar langsung dari berbagai tokoh inspiratif.', author: 'Wanda Pratisara Khairu Akiela, Promates 23' },
      { text: 'Pengalaman magang di Finture memberikan pemahaman yang cukup dekat dengan IP/Media Conversion, terutama dalam melihat bagaimana proses dan hasil kerja di bidang interior bisa diolah menjadi konten media yang memiliki nilai komunikasi sekaligus menarik bagi audiens.', author: 'Mas Ngabei Farrel, Promates 23' },
      { text: 'Saya mempelajari banyak hal terkait produksi, distribusi, dan pemasaran mainan. Mulai dari proses perencanaan hingga eksekusi brand activation, content creating dan toy reviews, sampai activation data recap.', author: 'Ghinitrie Fasya S Y, Promates 23' },
      { text: 'Banyak sekali pengalaman IP & Medcon yang saya dapati selama magang di PT Faber-Castell International Indonesia, mulai dari mempelajari produk, mengembangkan produk, hingga membuat produk menjadi sebuah cerita yang menarik untuk para pembeli. Lingkungan yang suportif dan menyenangkan menjadi nilai tambah pengalaman yang saya dapatkan selama magang.', author: 'Ilham Maulana, Promates 23' }
    ]
  },
  {
    id: 'tobo',
    name: 'TOBO Studio',
    focus: 'Toys & Bricks',
    icon: ToboIcon,
    color: 'bg-[#ffd500]',
    ig: '@studio.tobo',
    tiktok: null,
    persona: 'Si Pengrajin Cuan',
    matchReason: 'Anda menyukai pekerjaan hands-on, mengeksplorasi material, dan mengubah imajinasi menjadi produk fisik yang estetis.',
    shortDesc: 'TOBO Studio merupakan studio pengembangan produk mainan yang berfokus pada proses pembuatan produk mainan secara menyeluruh.',
    overview: 'TOBO Studio merupakan studio pengembangan produk mainan yang berfokus pada proses pembuatan produk mainan secara menyeluruh, mulai dari riset, perancangan, hingga produksi dan distribusi. Produk yang dikembangkan tidak terbatas pada bricks atau figure 3D, tetapi juga mencakup board game, card game, plushies, dan berbagai bentuk mainan lainnya.',
    dosenPembimbing: { name: 'Prof. Toy Maker', initial: 'TM' },
    dosenPeminatan: [
      { name: 'Budi 3D', initial: 'B3' },
      { name: 'Tuti Material', initial: 'TM' }
    ],
    streams: ['Designer'],
    alumniList: [
      { name: 'Jefri Nichol', role: 'Toy Designer', company: 'GoodGuysNeverWin' },
      { name: 'Adipati Dolken', role: 'Product Developer', company: 'Museum of Toys' }
    ],
    careerPath: ['Toy Designer/Product Designer', '2D/3D Artist / Visual Designer', 'Brand Manager', 'Creative & Brand Strategist', 'Toys Product Trade Marketing & Campaign Specialist', 'IP & Licensing Development', 'Entrepreneur di bidang produk kreatif/mainan'],
    skills: ['2D & 3D Design (sketching, digital design, 3D modeling)', 'Toy & Product Design (perancangan mainan dari konsep ke bentuk)', 'Research & Development (riset user, tren, dan ide produk)', 'Basic Branding & Marketing (visual produk, positioning, campaign)', 'Trend Forecasting'],
    seniorInsight: [
      { text: 'Selama magang di Emway, jujur aku ngerasa kayak bener-bener masuk ke dunia industri mainan dan kontennya secara langsung. Dari yang awalnya cuma suka mainan dan nonton konten, jadi ngerti proses di baliknya, dari ide sampai jadi konten yang siap dilihat orang. Yang paling relate sama TOBO Studio, aku jadi lihat langsung proses di balik sebuah produk mainan. Lewat EMCO, aku bisa kebayang gimana ide dikembangin sampai jadi produk yang siap dijual di industri.', author: 'Nabila Salim Sungkar, Promates 23' },
      { text: 'Selama magang di Emway, jujur banyak hal baru yang dipelajari, bukan hanya tentang desain mainan, tetapi bagaimana flow kerja dalam suatu industri. Mulai dari awal ideationnya, R&D, design, marketing, distribusi, dll. Ternyata proses approval (bahkan untuk sebuah packaging saja), ternyata bisa sampai revisi berkali-kali karena menyangkut dengan lisensi ip yang ada di luar negeri. Tapi dari itu aku belajar kalau ternyata memang industri mainan itu sangat serius dan butuh proses yang panjang hingga mainan itu digunakan oleh konsumen.', author: 'Anastacia Carolyn Daendells, Promates 23' }
    ]
  },
  {
    id: 'orangfilm',
    name: 'Orang Film UI',
    focus: 'Filmography & Photography',
    icon: OrangFilmIcon,
    color: 'bg-black',
    ig: '@orangfilm.ui',
    tiktok: '@orangfilm.ui',
    persona: 'Si Sutradara Estetik',
    matchReason: 'Anda memiliki kepekaan visual yang tinggi dan menyukai proses mengatur komposisi visual agar cerita terlihat sinematik.',
    shortDesc: 'Peminatan Filmografi, Videografi, dan Fotografi Produksi Media berfokus pada pengembangan keterampilan konseptual dan teknis dalam memproduksi film, videografi, dan fotografi.',
    overview: 'Peminatan Filmografi, Videografi, dan Fotografi Produksi Media berfokus pada pengembangan keterampilan konseptual dan teknis dalam memproduksi film, videografi, dan fotografi. Mahasiswa akan mempelajari berbagai aspek seperti manajemen kru & produksi, pengoprasian peralatan fotografi & videografi, skill pra-produksi, produksi, serta pasca-produksi, dan segala aspek lain dalam industri Film & Fotografi.',
    dosenPembimbing: { name: 'Joko Anwar, M.Sn.', initial: 'JA' },
    dosenPeminatan: [
      { name: 'Bowo DOP', initial: 'BD' },
      { name: 'Siti Editor', initial: 'SE' }
    ],
    streams: ['Artist', 'Project Manager'],
    alumniList: [
      { name: 'Chelsea Islan', role: 'Film Director', company: 'KawanKawan Media' },
      { name: 'Nicholas Saputra', role: 'Cinematographer', company: 'Miles Films' },
      { name: 'Dian Sastrowardoyo', role: 'Producer', company: 'Palari Films' }
    ],
    careerPath: ['Film Director', 'Director of Photography (DoP) / Cinematographer', 'Film & Video Editor', 'Colorist', 'Camera Operator', 'Professional Photographer (Commercial, Fashion, Documentary)', 'Art Director', 'Visual Stylist', 'Screenwriter', 'Content Creator / Creative Producer', 'Film Producer', 'Line Producer', 'Production Manager', 'Unit Manager', 'Location Manager', 'Production Coordinator', 'Post-Production Supervisor', 'Film Distributor', 'Talent Manager', 'Festival Programmer / Curator'],
    skills: ['Videography', 'Photography', 'Editing', 'Lighting Design', 'Sound Design'],
    seniorInsight: [
      { text: 'Kalo ditanya ngapain aja, jujur seru banget sih, kerjaan gua nggak jauh-jauh dari kamera. Waktu sama mas Davy gua bantuin set-up lighting buat project-project portrait di studio atau event-event beliau, kalo selama di JFW lari-larian motret backstage, product, ambience, sama tamu-tamu di JFW. Pembelajaran paling berasa itu mental di lapangan sih. Gua lumayan paham kalau teknis (skill megang kamera) doang nggak cukup, kita harus pinter-pinter baca situasi.', author: 'Azova Fajrul Falah Susilo, Promates 23' },
      { text: 'Menurut pengalaman aku pribadi ini bisa jadi kesempatan BAGUS bgt karena di base sendiri lumayan intimate, orang-orangnya ga sebanyak kyk semisal di visinema, jadi explore dan nanya" itu bisa banget, daging bgt juga, banyak chance yang bisa kalian dapetin. Kalian bakalan di welcome banget, harus juga kalian mau tau banyak hal karena mereka bakal kasih kalian kesempatan banyak bgt bgt.', author: 'Naura Zhafirah Irawan, Promates 23' },
      { text: 'Menurut gue magang di BASE Entertainment ngebuat gue jadi pribadi yang lebih baik, karena environment disana sangat ramah dan asik. gue jadi bisa dateng langsung ke lokasi shooting buat film Pesugihan Sate Gagak dari day 1 sampai kelar itu menurut gue whole new experience. Gue dapet banyak temen dan dari temen-temen itu gue dapet banyak ilmu juga. 1000/10 untuk magang di BASE Entertainment.', author: 'Danendra Sang Aria, Promates 23' }
    ]
  },
  {
    id: 'pixelpals',
    name: 'Pixel Pals',
    focus: 'Animation and Visual Design',
    icon: PixelPalsIcon,
    color: 'bg-[#2563eb]',
    ig: '@pixelpals.ui',
    tiktok: null,
    persona: 'Si Animator Handal',
    matchReason: 'Anda memiliki kesabaran dan imajinasi yang kuat untuk menghidupkan gambar statis menjadi karya visual yang memukau.',
    shortDesc: 'Pixel Pals adalah studio yang fokus mempelajari animasi dan desain grafis.',
    overview: 'Pixel Pals adalah studio yang fokus mempelajari animasi dan desain grafis.',
    dosenPembimbing: { name: 'Jennifer Leonita Tanuwijaya, M.M.', initial: 'JL' },
    dosenPeminatan: [],
    streams: ['Artist', 'Designer'],
    alumniList: [
      { name: 'Vanesha Prescilla', role: '2D Animator', company: 'Enspire Studio' },
      { name: 'Maudy Ayunda', role: 'Motion Designer', company: 'Gojek Creative Lab' }
    ],
    careerPath: ['Animator', 'Motion Graphic', 'Graphic Designer', 'Creative Director', 'Art Director', '2D & 3D Designer', 'Illustrator', 'Product Designer', 'Media Social Designer', 'Packaging Designer'],
    skills: ['Design', 'Illustration', 'Adobe Photoshop', 'Adobe Illustrator'],
    seniorInsight: [
      { text: 'The fact that a mentor hold a roblox summit competition for interns at work hours surprised me more than anything lol. In the graphic design division, knowing design principles and how to operate Adobe Photoshop are pretty much all you need. A good communication skills are also a must!', author: 'Ainul Mardiyah, Promates 23' },
      { text: 'The work hours are sooo flexible. Oh, and that moment when a Roblox Mount Summit competition for interns suddenly happened because of a debate over who could do it better lol. I think social skills come first. Then, for a graphic designer, having basic knowledge of Adobe Photoshop and Illustrator, along with illustration skills, is important. A strong design sense is also crucial since everyone really pays attention to details.', author: 'Syakira Naura, Promates 23' }
    ]
  },
  {
    id: 'pojokomik',
    name: 'PojoKomik',
    focus: 'Comics',
    icon: PojokomikIcon,
    color: 'bg-[#f5e6d3]',
    ig: '@pojokomik.studio',
    tiktok: null,
    persona: 'Si Pencerita Visual',
    matchReason: 'Anda sangat mahir menyampaikan emosi kompleks dan alur cerita yang menarik melalui panel-panel komik.',
    shortDesc: 'Studio komik yang mempelajari desain karakter, storytelling, dan perspektif fundamental untuk menciptakan komik dengan worldbuilding yang kuat.',
    overview: 'Studio komik yang mempelajari desain karakter, storytelling, dan perspektif fundamental untuk menciptakan komik dengan worldbuilding yang kuat.',
    dosenPembimbing: null,
    dosenPeminatan: [],
    streams: ['Artist'],
    alumniList: [
      { name: 'Tulus', role: 'Webtoonist', company: 'LINE Webtoon Indonesia' },
      { name: 'Isyana Sarasvati', role: 'Comic Artist', company: 'KOSMIK' }
    ],
    careerPath: ['Colorist', 'Comic Artist', 'Letterer', 'Editor', 'Scriptwriter'],
    skills: ['Menggambar tradisional & digital', 'Fundamental perspektif dasar', 'Desain karakter'],
    seniorInsight: [
      { text: 'Menurutku selama aku magang disana bener-bener sangat ngebuka mataku terhadap proses creative para komikus itu gimana dan bagaimana cara mereka menghandle proyek-proyek besar. Pekerjaan-pekerjaan yang aku dapat itu sudah sesuai dengan bidang/interest ku yang ada di komik (reformatting dialog ke webtoon, bikin script komik, dan juga mewarnai komik. Dan terakhir aku juga diberi kesempatan untuk ikut sebuah Comic Con dan merasakan proses gimana para tenant² disana mendirikan/mendekorasi booth mereka dan cara mereka meng-advertise produk-produk mereka ke khalayak ramai.', author: 'Aminaraisya Chandra Dara, Promates 23' },
      { text: 'Aku ngerti kalo ternyata bukan cuman artist editor saja yang ngebuat 1 project webtoon, there\'s a whole team dan sistem di belakang scenes nya. Belum lagi yang mengurus hr, academy mentoring, sosial media, dan sebagainya. Aku mulai belajar proper graphic design dan Photoshop dari magang ini, alhamdulillah mentoring nya straightforward, dikasih aset dan dibimbing jelas. Aku belajar management waktu, organize workload, kerja sama antara senior di kantor, dan sebagainya.', author: 'Raisha Alifa Pangestu, Promates 23' }
    ]
  },
  {
    id: 'flui',
    name: 'FLUI',
    focus: 'Fashion Lifestyle',
    icon: FluiIcon,
    color: 'bg-gray-500',
    ig: '@fluimedia',
    tiktok: '@flui.media',
    persona: 'Si Trendsetter',
    matchReason: 'Anda memiliki kepekaan terhadap tren terkini dan memahami cara mengemas gaya hidup menjadi konten yang menarik.',
    shortDesc: 'FLUI Media adalah studio Media Fashion & Lifestyle yang berada di bawah Produksi Media.',
    overview: 'FLUI Media adalah studio Media Fashion & Lifestyle yang berada di bawah Produksi Media. FLUI Media menyediakan platform yang didedikasikan untuk menyoroti merek-merek lokal oleh para wirausahawan muda.',
    dosenPembimbing: null,
    dosenPeminatan: [],
    streams: ['Project Manager', 'Artist'],
    alumniList: [
      { name: 'Pevita Pearce', role: 'Fashion Editor', company: 'Harper\'s Bazaar Indonesia' },
      { name: 'Afgansyah Reza', role: 'Lifestyle Editor', company: 'HighEnd Magazine' }
    ],
    careerPath: ['Fashion & Lifestyle Technology Expertise', 'Fashion & Lifestyle Data Analyst', 'Fashion & Lifestyle Photographer & Videographer', 'Fashion & Lifestyle Editors', 'Fashion & Lifestyle Journalist', 'Fashion & Lifestyle IP & Business Development Manager', 'Fashion & Lifestyle Public Relation', 'Fashion & Lifestyle Event Organizer', 'Digital Content Creator & Marketer', 'Fashion Stylist', 'Luxury Brand Manager', 'Retail Brand Manager', 'Creative Director'],
    skills: ['Graphic Design', 'Fashion Styling', 'Copywriting', 'Content Creation', 'Photography', 'Photo & Video Editing', 'Branding Strategy', 'Social Media Management', 'Trend Research', 'Layout Design'],
    seniorInsight: [
      { text: 'Selama magang sebagai PR & Marketing Intern, aku terlibat dalam pembuatan content brief untuk KOL dan komunitas, produksi konten digital untuk akun Instagram Kami Idea & Kami People, reach out kepada KOL dan mendistribusikan PR package untuk berbagai event. Peran ini memberiku wawasan serta pengalaman langsung dalam aktivitas marketing yang relevan dengan peminatan di Promed yang aku tekuni. Aku sangat bersyukur bisa magang di tempat tersebut karena lingkungan kerja yang suportif dan menyenangkan membuatku bisa berkembang tanpa merasa terbebani.', author: 'Raissa Kamila Zahra, Promates 22' },
      { text: 'Greenroom di JFW itu bagian yang ngurusin MUA sama hairstylist. Sebagai intern aku itu ngurusin data2 dan keperluan2 mengenai MUA & hairstylist dari mulai pre-event, event, sampe post-eventnyaa. Menurut pengalaman akuu magang di JFW ituu seru bangett dan pastinya sangat amat menantang, karena aku pribadi emg suka kerja dibalik layar kann terutama bagian event. Apalagi JFW itu pacenya cepet bgt, kita harus inisiatif dan kerja cepet juga karena klo engga ya akan ketinggalann.', author: 'Alisa Sofia Rahmah, Promates 23' },
      { text: 'Jujuuur kalo di Plaza Indonesia seru banget, selain dapet pengalaman banyak dari berbagai jenis event yang berbeda. Lingkungannya juga asik bagi gue yang cukup ekstrovert. Karena mereka ngerangkul banget sejujurnya.', author: 'Damar Sinara, Promates 23' }
    ]
  },
  {
    id: 'spice',
    name: 'S.P.I.C.E. Studio',
    focus: 'HCI & CT (UI/UX & Tech)',
    icon: SpiceIcon,
    color: 'bg-gradient-to-br from-blue-500 via-green-500 to-yellow-500',
    ig: '@s.p.i.c.e.studio',
    tiktok: '@s.p.i.c.e.studio',
    persona: 'Si Solusi Digital',
    matchReason: 'Anda memiliki kepedulian terhadap kenyamanan pengguna dalam menggunakan aplikasi. Kombinasi empati dan pemahaman teknologi Anda sangat ideal untuk menjadi UX designer.',
    shortDesc: 'S.P.I.C.E. Studio merupakan wadah bagi mahasiswa konsentrasi HCI (human-computer interaction) dan CTD (creative technology development) di Produksi Media UI.',
    overview: 'S.P.I.C.E. Studio merupakan wadah bagi mahasiswa konsentrasi HCI (human-computer interaction) dan CTD (creative technology development) di Produksi Media UI. Mahasiswa di S.P.I.C.E. belajar dan studi mengenai bagaimana manusia berinteraksi dengan teknologi komputer. Hal tersebut mencakup desain antarmuka pengguna (user interface) yang intuitif, pengujian pengguna, dan prinsip psikologi yang digunakan untuk membuat teknologi lebih mudah digunakan dan lebih efektif.',
    dosenPembimbing: { name: 'Micho Gunawan, M.M.', initial: 'MG' },
    dosenPeminatan: [],
    streams: ['Data Engineer', 'Web3 Engineer', 'Software/Chatbot Engineer', 'AR/VR Engineer', 'UI/UX Designer'],
    alumniList: [
      { name: 'Arya Saloka', role: 'Product Designer', company: 'Tokopedia' },
      { name: 'Amanda Manopo', role: 'UX Researcher', company: 'Traveloka' }
    ],
    careerPath: ['Web Designer', 'Web Programmer', 'Software Programmer', 'Web-3/Blockchain Programmer', 'Chatbot Programmer', 'UI/UX Designer', 'Data Engineer'],
    skills: ['AR/VR', 'Unity', 'Programming', 'Blender', 'Coding', 'Design', 'HTML', 'Web3 Blockchain', 'FIGMA'],
    seniorInsight: [
      { text: 'Magang di tempatnya baru sekedar ujicoba, overall masih bisa handle semua kerjaannya', author: 'Idris Bagus Wicaksono, CX Insight, Promates 22' },
      { text: 'Dapat insight banyak mengenai cara kerja UI/UX dan bekerja sama dgn orang terkait. Magangnya sering dilaksanakan secara online ketimbang magang di office langsung.', author: 'Muhammad Aabid Asaduddin, Nusameta, Promates 23' },
      { text: 'Menambah experience & jadi tahu flow kerja di corporate', author: 'Christoper Emmanuel, Bifarma Adiluhung, Promates 23' }
    ]
  },
  {
    id: 'oxlab',
    name: 'OX-Laboratory',
    focus: 'Game Development',
    icon: OxLabIcon,
    color: 'bg-gradient-to-br from-blue-500 to-purple-600',
    ig: '@ox.lab',
    tiktok: '@ox.lab',
    persona: 'Si Dewa Mekanik',
    matchReason: 'Anda memiliki keseimbangan antara logika dan imajinasi yang sangat baik untuk programming dan merancang game yang engaging.',
    shortDesc: 'Studio pengembangan gim dengan fokus memfasilitasi minat mahasiswa dalam produksi gim digital yang memiliki ciri khas yang menarik pada tiap produknya.',
    overview: 'Studio pengembangan gim dengan fokus memfasilitasi minat mahasiswa dalam produksi gim digital yang memiliki ciri khas yang menarik pada tiap produknya.',
    dosenPembimbing: { name: 'Duray Philip Rompas, M.T.', initial: 'DR' },
    dosenPeminatan: [],
    streams: ['Game Programmer', 'Game Designer', 'Game Artist', 'Product Manager'],
    alumniList: [
      { name: 'Arifin Putra', role: 'Game Programmer', company: 'Agate Studio' },
      { name: 'Mikha Tambayong', role: 'Level Designer', company: 'Toge Productions' }
    ],
    careerPath: ['Game Programmer', 'Concept Artist', '2D Artist', '3D Artist', 'Animator', 'UI/UX Designer', 'Technical Artist'],
    skills: ['Programming', 'Logika & Algoritma', 'Fundamental dalam Seni', 'Animasi', 'Debugging', 'Asset & Version Control', 'Penguasaan Game Engine', 'Unity', 'Blender'],
    seniorInsight: [
      { text: 'Magangnya seru & bisa merasakan langsung pengalaman bekerja sebagai game developer. Hasil dari masa magangnya adalah kontribusi terhadap berberapa game yang rilis dan "coming soon"', author: 'Reiky Perkasa, Extra Life Entertainment, Promates 23' },
      { text: 'Saya bisa merasakan langsung pengalaman bekerja di bidang game dev terutama game programmer, Hasil dari magang saya menghasilkan satu game, sudah rilis di Itch.io. Magangnya ini bertempatkan di luar kantor & lebih menggunakan fasilitas kampus', author: 'Derron Samuel Davor Sitorus, Extra Life Entertainment, Promates 23' }
    ]
  },
  {
    id: 'wire',
    name: 'WIRE Music Studio',
    focus: 'Music Production & Business',
    icon: WireIcon,
    color: 'bg-[#5a7a5a]',
    ig: '@wirestudio.music',
    tiktok: '@wiremusic.studio',
    persona: 'Si Suhu Audio',
    matchReason: 'Anda memiliki kepekaan terhadap musik dan memahami cara menciptakan karya yang berkualitas serta memiliki nilai komersial.',
    shortDesc: 'WIRE (Music Business & Production) adalah studio yang berfokus pada pengembangan ekosistem musik di Produksi Media melalui pembelajaran music business, produksi, kolaborasi, dan pengembangan talenta.',
    overview: 'WIRE (Music Business & Production) adalah studio yang berfokus pada pengembangan ekosistem musik di Produksi Media melalui pembelajaran music business, produksi, kolaborasi, dan pengembangan talenta. Sebagai salah satu wadah pembelajaran music business formal bagi mahasiswa di Indonesia dan label musik pertama di UI, WIRE menjadi ruang bagi mahasiswa untuk berkarya, membangun jejaring profesional, serta mengembangkan industri musik yang berkelanjutan melalui semangat kolaborasi, pertumbuhan bersama, dan penghargaan terhadap setiap individu dalam ekosistemnya.',
    dosenPembimbing: null,
    dosenPeminatan: [],
    streams: ['Music Business', 'Music Production'],
    alumniList: [],
    careerPath: ['A&R Music Label', 'Artist / Band Manager', 'Artist', 'Music Producer', 'Songwriter', 'Composer', 'Mixing & Mastering Engineer', 'Event Producer', 'Sound Engineer', 'Recording Engineer', 'Session Musician', 'Marketing Manager', 'Digital Marketing/Social Media Manager', 'Production Manager', 'Distribution Manager', 'Label Manager'],
    skills: ['Songwriting', 'Mixing', 'Mastering', 'Recording', 'Performing', 'Artist Management', 'Strategic Marketing'],
    seniorInsight: []
  },
  {
    id: 'kuls',
    name: 'KULS Creative',
    focus: 'Digital Advertising & Gamification',
    icon: KulsIcon,
    color: 'bg-[#7a6ba8]',
    ig: '@kuls.creative',
    tiktok: '@kuls.creative',
    persona: 'Si Suhu Marketer',
    matchReason: 'Anda memiliki kemampuan mengolah ide kreatif menjadi copywriting yang persuasif dan mampu menarik minat konsumen.',
    shortDesc: 'Peminatan Digital Advertising, Gig Media, dan Gamifikasi Produksi Media Universitas Indonesia berfokus pada pengembangan keterampilan manajerial dan teknis dalam menciptakan promosi produk, gig media, dan konsep gamifikasi.',
    overview: 'Peminatan Digital Advertising, Gig Media, dan Gamifikasi Produksi Media Universitas Indonesia berfokus pada pengembangan keterampilan manajerial dan teknis dalam menciptakan promosi produk, gig media, dan konsep gamifikasi. Mahasiswa di peminatan ini mempelajari berbagai aspek seperti perencanaan konten, analisis brand & produk, konsep aplikasi, dan sebagainya.',
    dosenPembimbing: null,
    dosenPeminatan: [],
    streams: ['Project Manager', 'Designer / Creative', 'Artist / Content Creative', 'Gamification & Media Tech'],
    alumniList: [],
    careerPath: ['Advertising Specialist', 'Copywriter', 'Creative Strategist', 'Brand Strategist', 'Account Executive', 'Media Planner', 'Media Buyer', 'Digital Marketing Specialist', 'Social Media Specialist', 'Content Strategist', 'Campaign Manager', 'Art Director', 'Creative Director', 'Marketing Communication Specialist', 'Brand Manager'],
    skills: ['Ideation & Brainstorming', 'Copywriting', 'Marketing Strategy', 'Gamification Design'],
    seniorInsight: []
  },
  {
    id: 'stage',
    name: 'STAGE',
    focus: 'Performing Arts',
    icon: StageIcon,
    color: 'bg-[#5b2c91]',
    ig: '@stage.ui',
    tiktok: null,
    persona: 'Si Anak Panggung',
    matchReason: 'Anda memiliki energi dan kemampuan yang baik dalam mengelola acara live dan mengubah kompleksitas event menjadi pertunjukan yang memukau.',
    shortDesc: 'Cluster ini merupakan bagian dari peminatan dalam Program Studi Produksi Media - Vokasi Universitas Indonesia yang berfokus pada pengembangan karya seni pertunjukan berbasis produksi media modern.',
    overview: 'Cluster ini merupakan bagian dari peminatan dalam Program Studi Produksi Media - Vokasi Universitas Indonesia yang berfokus pada pengembangan karya seni pertunjukan berbasis produksi media modern. Cluster ini mengintegrasikan praktik performance, creative production, digital stage technology, dan media documentation sehingga mahasiswa mampu menciptakan karya pertunjukan yang relevan dengan industri kreatif kontemporer.',
    dosenPembimbing: null,
    dosenPeminatan: [],
    streams: ['Artist Stream (Performer & Creative Artist Track)', 'Live Event Producer', 'Voice Artist'],
    alumniList: [],
    careerPath: ['Stage Performers (Theatre, Musical Theatre, Dancer)', 'Film and Television Actors', 'Voice Actors and Dubbing Artists', 'Live Event Performers (Concerts, Festivals, and Commercial Shows)', 'Content creators (YouTube, TikTok, Instagram Reels)', 'Performance-based influencers', 'Digital storytellers combining acting, music, and visual performance', 'Livestream performers (music, acting, interactive shows)', 'Performance director / assistant director', 'Creative producer for shows and performances', 'Talent coordinator or casting director', 'Stage manager or showrunner', 'Independent performance groups or studios', 'Creative production houses', 'Talent management agencies', 'Digital performance channels or IP-based content'],
    skills: ['Stage Performance Techniques', 'Creative Expression and Artistic Identity', 'Music and Performance Production', 'Body Movement and Stage Presence', 'Live Performance and Audience Engagement', 'Multimedia Integration in Stage Performance', 'Performance Documentation and Digital Distribution'],
    seniorInsight: []
  }
];

const ASSESSMENT_QUESTIONS = [
  { id: 1, question: "Gue ngerasa kesulitan pas harus kenalan sama orang baru.", tags: { agree: ['oxlab', 'mosaic'], disagree: ['stage', 'vote'] } },
  { id: 2, question: "Gue sering tenggelam dalam pikiran sendiri sampe lupa keadaan sekitar.", tags: { agree: ['icon', 'pojokomik', 'oxlab'], disagree: ['mvp', 'stage'] } },
  { id: 3, question: "Gue usahain bales chat atau email secepetnya, ngga betah liat notifikasi numpuk.", tags: { agree: ['mvp', 'mosaic'], disagree: ['orangfilm', 'wire'] } },
  { id: 4, question: "Gue gampang banget tetep nyantai dan fokus walau lagi di bawah tekanan.", tags: { agree: ['stage', 'orangfilm', 'vote'], disagree: ['pojokomik', 'flui'] } },
  { id: 5, question: "Gue lebih suka ngerjain sesuatu yang udah jelas aturannya dibanding yang bebas banget.", tags: { agree: ['mosaic', 'spice'], disagree: ['icon', 'kuls'] } },
  { id: 6, question: "Kalo ada konflik di kelompok, gue lebih milih ngehindar daripada ngadepin.", tags: { agree: ['pixelpals', 'tobo'], disagree: ['mvp', 'stage'] } },
  { id: 7, question: "Gue suka ngulik hal-hal yang berbau visual, warna, dan bentuk estetik.", tags: { agree: ['flui', 'pixelpals', 'orangfilm'], disagree: ['mosaic', 'oxlab'] } },
  { id: 8, question: "Gue ngerasa lebih gampang nulis uneg-uneg dibanding ngomong langsung.", tags: { agree: ['vote', 'kuls', 'pojokomik'], disagree: ['stage', 'mvp'] } },
  { id: 9, question: "Gue suka ngebongkar barang atau alat buat tau gimana cara kerjanya.", tags: { agree: ['tobo', 'spice', 'oxlab'], disagree: ['flui', 'vote'] } },
  { id: 10, question: "Gue gampang kepengaruh sama mood atau perasaan orang lain di sekitar gue.", tags: { agree: ['spice', 'flui'], disagree: ['mosaic', 'oxlab'] } },
  { id: 11, question: "Kalo disuruh milih, gue lebih seneng nganalisis data angka daripada nyari ide cerita.", tags: { agree: ['mosaic', 'spice'], disagree: ['icon', 'pojokomik'] } },
  { id: 12, question: "Gue suka ngatur rencana sedetail mungkin sebelum mulai ngerjain project.", tags: { agree: ['mvp', 'stage'], disagree: ['orangfilm', 'kuls'] } },
  { id: 13, question: "Gue lebih sering dapet ide-ide gila pas lagi sendirian daripada pas lagi kumpul-kumpul.", tags: { agree: ['icon', 'pojokomik', 'wire'], disagree: ['kuls', 'vote'] } },
  { id: 14, question: "Gue ngga masalah ngerjain kerjaan yang itu-itu aja tiap hari asalkan jelas hasilnya.", tags: { agree: ['mosaic', 'tobo'], disagree: ['vote', 'stage'] } },
  { id: 15, question: "Gue gampang ngerasa bosen sama hal-hal yang terlalu teoritis dan ngga ada prakteknya.", tags: { agree: ['tobo', 'orangfilm', 'wire'], disagree: ['mosaic', 'vote'] } },
  { id: 16, question: "Gue pengen kerjaan gue nanti bisa kasih pengaruh nyata ke masyarakat luas.", tags: { agree: ['vote', 'spice', 'kuls'], disagree: ['tobo', 'pixelpals'] } },
  { id: 17, question: "Gue seneng merhatiin gimana cara orang berinteraksi pake sebuah produk atau aplikasi.", tags: { agree: ['spice', 'mosaic'], disagree: ['orangfilm', 'pojokomik'] } },
  { id: 18, question: "Gue lebih milih jadi sosok di balik layar ketimbang yang tampil di depan kamera.", tags: { agree: ['orangfilm', 'wire', 'pixelpals'], disagree: ['stage', 'vote'] } },
  { id: 19, question: "Gue punya insting yang kuat soal tren apa yang bakal hits di masa depan.", tags: { agree: ['flui', 'kuls', 'icon'], disagree: ['oxlab', 'tobo'] } },
  { id: 20, question: "Menurut gue, ngerjain suatu mahakarya yang sempurna itu butuh waktu lama dan kesabaran ekstra.", tags: { agree: ['pixelpals', 'oxlab', 'wire'], disagree: ['mvp', 'vote'] } }
];


// --- MAIN APPLICATION COMPONENT ---

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedStudio, setSelectedStudio] = useState(null);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => document.head.removeChild(link);
  }, []);

  const navigateTo = (page, data = null) => {
    window.scrollTo(0, 0);

    setCurrentPage(page);

    if (data) {
      setSelectedStudio(data);
    }
  };

  return (
    <div className="font-['Plus_Jakarta_Sans'] bg-white text-slate-900 min-h-screen flex flex-col selection:bg-[#ebf0ff] overflow-x-hidden">

      <Navbar
        currentPage={currentPage}
        navigateTo={navigateTo}
      />

      <main className="flex-grow md:pt-20 pt-16">
        {currentPage === 'home' && (
          <HomeView navigateTo={navigateTo} />
        )}

        {currentPage === 'studios' && (
          <StudiosView navigateTo={navigateTo} />
        )}

        {currentPage === 'studio-detail' && (
          <StudioDetailView
            studio={selectedStudio}
            navigateTo={navigateTo}
          />
        )}

        {currentPage.startsWith('assessment') && (
          <NewAssessmentFlow
            currentPage={currentPage}
            navigateTo={navigateTo}
            STUDIOS={STUDIOS}
          />
        )}
      </main>

      <Footer navigateTo={navigateTo} />

      {showAnnouncement && (
        <AnnouncementPopup
          onClose={() => setShowAnnouncement(false)}
        />
      )}

      <BackgroundMusic audioSrc={promedJingle} />

    </div>
  );
}

// --- COMPONENTS ---

const Navbar = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'studios', label: 'Eksplor Studio', icon: LayoutGrid },
    { id: 'assessment-intro', label: 'Self Assessment', icon: FileEdit },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => { navigateTo('home'); setIsMenuOpen(false); }}
          >
            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
              <Logo />
            </div>
            <span className="font-extrabold text-xl md:text-2xl tracking-tight text-slate-900">
              Promed<span className="text-[#35489e]">Path</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage.startsWith(item.id.split('-')[0]);
              return (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isActive 
                      ? 'bg-[#ebf0ff] text-[#243376]' 
                      : 'text-slate-600 hover:text-[#35489e] hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
               {isMenuOpen ? <X className="w-6 h-6 text-[#35489e]" /> : <Menu className="w-6 h-6" />}
             </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white absolute left-0 right-0 shadow-lg pb-4">
             <div className="flex flex-col px-4 pt-2 space-y-1">
               {navItems.map((item) => {
                  const isActive = currentPage.startsWith(item.id.split('-')[0]);
                  return (
                    <button
                      key={item.id}
                      onClick={() => { navigateTo(item.id); setIsMenuOpen(false); }}
                      className={`px-4 py-3 rounded-xl text-left font-semibold transition-colors flex items-center gap-3 ${
                        isActive 
                          ? 'bg-[#ebf0ff] text-[#243376]' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-[#35489e]' : 'text-slate-400'}`} />
                      {item.label}
                    </button>
                  )
                })}
             </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Footer = ({ navigateTo }) => (
  <footer className="bg-[#2c3e95] text-white py-10 md:py-14 border-t-[4px] border-pink-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-10">
        
        <div className="md:col-span-5 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
              <Logo />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">
              Promed<span className="text-white/80">Path</span>
            </span>
          </div>
          <p className="text-sm text-white/90 mb-6 leading-relaxed max-w-sm font-medium">
            Panduan komprehensif Program Studi Produksi Media Universitas Indonesia. Temukan studio yang tepat untuk masa depan Anda.
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-extrabold text-lg text-white mb-4 md:mb-6 uppercase tracking-wider border-b-2 border-white/20 pb-2 inline-block">Produksi Media UI</h3>
          <ul className="space-y-3 md:space-y-4 font-medium text-sm text-white/90">
            <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Beranda</button></li>
            <li><button onClick={() => navigateTo('studios')} className="hover:text-white transition-colors">Eksplor Studio</button></li>
            <li><button onClick={() => navigateTo('assessment-intro')} className="hover:text-white transition-colors">Self Assessment</button></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-extrabold text-lg text-white mb-4 md:mb-6 uppercase tracking-wider border-b-2 border-white/20 pb-2 inline-block">Contact Information</h3>
          <ul className="space-y-4 md:space-y-5 text-sm font-medium text-white/90">
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="break-all">lab.promed@vokasi.ui.ac.id</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="leading-snug">Gedung Business Center Lt.2, Vokasi UI, Jawa Barat 16424</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <span>@lab.promed.ui</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/80 text-center md:text-left">
        <div className="flex gap-4 md:gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
        </div>
        <div className="md:text-right">
          Copyright © 2026 Promed Path Vokasi UI. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

// --- VIEW: HOME (LANDING PAGE) ---

const HomeView = ({ navigateTo }) => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* HERO SECTION */}
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
                Temukan Jalur <br className="hidden md:block"/>
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Kreatif Anda di Produksi Media
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed font-medium">
                Satu program studi, 14 studio spesialisasi. Temukan studio yang paling sesuai dengan minat, bakat, dan tujuan karir Anda di industri kreatif masa kini.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-4">
                <button
                  onClick={() => navigateTo('assessment-intro')}
                  className="w-full sm:w-auto px-5 py-3 md:px-8 md:py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full font-bold text-sm md:text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 shadow-xl flex items-center justify-center group flex-shrink-0"
                >
                  Mulai Self-Assessment
                  <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigateTo('studios')}
                  className="w-full sm:w-auto px-5 py-3 md:px-8 md:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-bold text-sm md:text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 shadow-lg flex items-center justify-center flex-shrink-0"
                >
                  Lihat Semua Studio
                </button>
              </div>
            </div>

            {/* Right Abstract Visual Hero */}
            <div className="order-first lg:order-last lg:w-1/2 w-full mt-4 lg:mt-0 relative h-[320px] md:h-[450px] flex items-center justify-center">
              {/* Center Main Badge */}
              <div className="absolute z-20 bg-white p-4 md:p-6 rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-2 md:mb-3 shadow-inner">
                  <Compass className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <p className="font-extrabold text-slate-800 text-base md:text-lg">Pilih Jalur Anda</p>
                <p className="text-xs md:text-sm font-medium text-slate-500">14 Studio Tersedia</p>
              </div>

              {/* Floating Element 1 (Top Left) */}
              <div className="absolute z-10 top-[5%] md:top-[10%] left-[2%] md:left-[15%] bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2 md:gap-3 transform -rotate-6 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform">
                  <PojokomikIcon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="font-bold text-slate-800 text-xs md:text-sm">PojoKomik</p>
                  <p className="text-[10px] md:text-xs font-medium text-slate-400">Comics</p>
                </div>
              </div>

              {/* Floating Element 2 (Bottom Left) */}
              <div className="absolute z-30 bottom-[10%] md:bottom-[15%] left-0 md:left-[10%] bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2 md:gap-3 transform rotate-3 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <OxLabIcon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="font-bold text-slate-800 text-xs md:text-sm">OX-Lab</p>
                  <p className="text-[10px] md:text-xs font-medium text-slate-400">Game Dev</p>
                </div>
              </div>

              {/* Floating Element 3 (Top Right) */}
              <div className="absolute z-10 top-[15%] md:top-[20%] right-0 md:right-[5%] bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2 md:gap-3 transform rotate-6 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 group-hover:scale-110 transition-transform">
                  <FluiIcon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="font-bold text-slate-800 text-xs md:text-sm">FLUI</p>
                  <p className="text-[10px] md:text-xs font-medium text-slate-400">Fashion Lifestyle</p>
                </div>
              </div>

              {/* Floating Element 4 (Bottom Right) */}
              <div className="absolute z-10 bottom-[15%] md:bottom-[20%] right-[2%] md:right-[5%] bg-white p-3 md:p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-2 md:gap-3 transform -rotate-3 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                  <MosaicIcon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="hidden sm:block">
                  <p className="font-bold text-slate-800 text-xs md:text-sm">MOSAIC</p>
                  <p className="text-[10px] md:text-xs font-medium text-slate-400">Data Analytics</p>
                </div>
              </div>

              {/* Decorative dotted circle */}
              <div className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full border-2 border-dashed border-slate-300 animate-spin-slow"></div>
              <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-slate-200 opacity-50"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-10 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Persiapan Karir yang Jelas dan Terstruktur</h2>
            <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">Kurikulum kami dirancang bersama praktisi industri untuk memastikan lulusan siap memasuki dunia kerja profesional.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <StatCard icon={<GraduationCap/>} number="100%" text="Mahasiswa diterima magang di semester 5" />
            <StatCard icon={<Building/>} number="30+" text="Mitra Agency & Industri Kreatif" />
            <StatCard icon={<Users/>} number="14" text="Pilihan Studio Sesuai Minat Anda" />
          </div>
        </div>
      </section>

      {/* FEATURE OVERVIEW (INFORMATION ARCHITECTURE) */}
      <section className="py-12 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Side: Texts & Features */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-5 leading-tight text-slate-900 text-center lg:text-left">
                Ada apa aja di <br className="hidden lg:block"/>
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Promed Path?</span>
              </h2>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed font-medium text-center lg:text-left">
                Platform ini dirancang khusus untuk membantu Anda yang sedang mempertimbangkan pilihan peminatan. Kami menyediakan dua fitur utama untuk memudahkan Anda:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#ebf0ff] rounded-2xl flex items-center justify-center border border-blue-100 group-hover:bg-[#35489e] transition-colors duration-300">
                    <Filter className="w-6 h-6 md:w-7 md:h-7 text-[#35489e] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4 md:ml-5">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">Kepoin 14 Studio</h3>
                    <p className="text-slate-600 mt-1 md:mt-2 leading-relaxed text-sm md:text-[15px] font-medium">Cari, saring, dan pelajari seluk-beluk setiap studio. Informasi lengkap mulai dari dosen pengampu, profil alumni, peluang karir, hingga skill yang akan Anda pelajari.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-purple-50 rounded-2xl flex items-center justify-center border border-purple-100 group-hover:bg-purple-600 transition-colors duration-300">
                    <Brain className="w-6 h-6 md:w-7 md:h-7 text-purple-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="ml-4 md:ml-5">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">Self-Assessment Asik</h3>
                    <p className="text-slate-600 mt-1 md:mt-2 leading-relaxed text-sm md:text-[15px] font-medium">Tidak perlu bingung menebak-nebak. Ikuti kuis kami, jawab pertanyaannya, dan sistem akan memberikan 3 rekomendasi studio yang paling sesuai dengan Anda.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side: Clean Glassmorphism UI Illustration */}
            <div className="lg:w-1/2 w-full flex justify-center mt-8 lg:mt-0">
              <div className="w-full max-w-lg bg-slate-100/50 backdrop-blur-sm border border-slate-200/60 rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 flex flex-col justify-center gap-4 md:gap-5 relative overflow-hidden shadow-2xl shadow-slate-200/50">
                 
                 {/* Card 1 */}
                 <div className="bg-white border border-slate-100 p-4 md:p-5 rounded-2xl flex items-center gap-4 md:gap-5 relative z-10 w-[95%] transform transition-transform hover:-translate-y-1 hover:shadow-lg shadow-sm">
                   <div className="w-12 h-12 md:w-14 md:h-14 bg-[#35489e] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-[#35489e]/30">
                     <Search className="w-5 h-5 md:w-6 md:h-6 text-white"/>
                   </div>
                   <div>
                     <p className="font-bold text-slate-800 text-sm md:text-[17px]">Cari Peminatan</p>
                     <p className="text-xs md:text-[14px] text-slate-500 font-medium">Filter berdasarkan minat & bakat Anda</p>
                   </div>
                 </div>

                 {/* Card 2 */}
                 <div className="bg-white border border-slate-100 p-4 md:p-5 rounded-2xl flex items-center gap-4 md:gap-5 relative z-10 w-[95%] self-end transform transition-transform hover:-translate-y-1 hover:shadow-lg shadow-sm">
                   <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                     <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white"/>
                   </div>
                   <div>
                     <p className="font-bold text-slate-800 text-sm md:text-[17px]">Tes Kecocokan</p>
                     <p className="text-xs md:text-[14px] text-slate-500 font-medium">Jawab pertanyaan singkat & santai</p>
                   </div>
                 </div>

                 {/* Card 3 */}
                 <div className="bg-white border border-slate-100 p-4 md:p-5 rounded-2xl flex items-center gap-4 md:gap-5 relative z-10 w-[95%] transform transition-transform hover:-translate-y-1 shadow-md ring-2 ring-emerald-100">
                   <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                     <Rocket className="w-5 h-5 md:w-6 md:h-6 text-white"/>
                   </div>
                   <div>
                     <p className="font-bold text-slate-800 text-sm md:text-[17px]">Hasil Top 3</p>
                     <p className="text-xs md:text-[14px] text-slate-500 font-medium">Dapatkan jalur karir yang sesuai dengan Anda</p>
                   </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ icon, number, text }) => (
  <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm">
    <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-[#ebf0ff] text-[#35489e] rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
      {React.cloneElement(icon, { className: 'w-6 h-6 md:w-8 md:h-8' })}
    </div>
    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">{number}</h3>
    <p className="text-slate-600 font-medium text-sm md:text-[15px] leading-snug">{text}</p>
  </div>
);


// --- VIEW: STUDIOS LIST ---

const StudiosView = ({ navigateTo }) => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = ['All', ...new Set(STUDIOS.map(s => s.focus))];
  
  const filteredStudios = STUDIOS.filter(s => {
    const matchFilter = filter === 'All' || s.focus === filter;
    const matchSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        s.focus.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8 md:py-12 animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Explore with better illustration concept */}
        <div className="bg-[#6b3cba] rounded-[2rem] p-8 md:p-12 text-white mb-10 md:mb-12 relative overflow-hidden shadow-lg border-4 border-purple-200">
           {/* Soft background elements */}
           <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>
           <div className="absolute -bottom-20 right-20 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply opacity-50 blur-3xl"></div>

           <div className="relative z-10 md:w-2/3">
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-purple-100 font-bold text-xs mb-4 backdrop-blur-sm border border-white/10">
                 <LayoutGrid className="w-4 h-4 mr-2" /> 14 Pilihan Karir
              </div>
             <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Jelajahi Dunia <br className="hidden md:block"/>Produksi Media</h1>
             <p className="text-purple-100 text-base md:text-lg font-medium leading-relaxed">
               Dari menulis naskah film hingga membuat strategi marketing esports. Temukan passion dan skill yang akan Anda dapatkan di setiap studio.
             </p>
           </div>

           {/* New Illustration Elements */}
           <div className="hidden md:flex absolute right-12 bottom-0 top-0 items-center justify-center w-1/3">
              <div className="relative w-full h-full flex items-center justify-center">
                 <div className="absolute top-10 right-20 w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center transform rotate-12 animate-pulse-slow border border-white/30">
                    <Camera className="w-8 h-8 text-pink-200" />
                 </div>
                 <div className="absolute bottom-12 right-32 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform -rotate-12 border border-white/30 shadow-lg">
                    <Gamepad2 className="w-10 h-10 text-emerald-200" />
                 </div>
                 <div className="absolute top-24 right-48 w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transform rotate-6 border border-white/30">
                    <MonitorPlay className="w-7 h-7 text-blue-200" />
                 </div>
                 <div className="absolute bottom-28 right-8 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform -rotate-6 border border-white/30">
                    <Lightbulb className="w-7 h-7 text-yellow-200" />
                 </div>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Daftar Studio</h2>
            <p className="text-slate-500 text-sm md:text-base font-medium">Klik card buat liat detail lengkapnya.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Cari nama studio..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 text-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#35489e] focus:border-transparent font-medium shadow-sm transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Filter Dropdown */}
            <div className="relative w-full sm:w-60">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Filter className="h-4 w-4 text-slate-400" />
              </div>
              <select 
                className="w-full appearance-none bg-white border border-slate-300 text-slate-700 py-3 pl-11 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#35489e] focus:border-transparent font-medium shadow-sm cursor-pointer transition-all"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat === 'All' ? 'Semua Kategori' : cat}</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <ChevronRight className="h-4 w-4 transform rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {filteredStudios.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
               <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Studio Ngga Ketemu</h3>
            <p className="text-slate-500 mt-2 font-medium">Coba gunakan kata kunci lain atau reset filter Anda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredStudios.map(studio => (
              <div 
                key={studio.id}
                onClick={() => navigateTo('studio-detail', studio)}
                className="bg-white rounded-3xl p-5 md:p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col h-full"
              >
                <div className="mb-5 md:mb-6">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-white ${studio.color} shadow-lg shadow-${studio.color.replace('bg-', '')}/30`}>
                     <studio.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#35489e] transition-colors">
                  {studio.name}
                </h3>
                <p className="text-[#35489e] font-medium text-xs md:text-sm mb-3 md:mb-4">{studio.focus}</p>
                
                <p className="text-slate-600 text-sm md:text-[15px] flex-grow leading-relaxed font-medium">
                  {studio.shortDesc}
                </p>
                
                <div className="mt-5 md:mt-6 pt-4 md:pt-5 border-t border-slate-100 flex items-center justify-between text-xs md:text-sm font-bold text-slate-400 group-hover:text-[#35489e] transition-colors">
                  <span>Lihat Detailnya</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};


// --- VIEW: STUDIO DETAIL (ONE PAGE) ---

const OldStudioDetailView = ({ studio, navigateTo }) => {
  if (!studio) return null;

  return (
    <div className="min-h-screen bg-slate-50 animate-in slide-in-from-right-8 duration-300 pb-20">
      <div className="bg-white border-b border-slate-200 sticky top-16 md:top-20 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 md:py-4 flex items-center">
          <button 
            onClick={() => navigateTo('studios')}
            className="flex items-center text-slate-500 hover:text-[#35489e] font-bold text-xs md:text-sm transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Balik ke Daftar
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-6 md:mt-10">
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-slate-100 mb-6 md:mb-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 opacity-5 rounded-bl-full ${studio.color}`}></div>
          
          <div className={`flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl flex items-center justify-center text-white ${studio.color} shadow-xl z-10`}>
             <studio.icon className="w-8 h-8 md:w-12 md:h-12" />
          </div>
          
          <div className="z-10 w-full">
            <span className="inline-block bg-[#ebf0ff] text-[#243376] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-[13px] mb-3 md:mb-4 border border-[#cdd6ec]">
              Fokus: {studio.focus}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3 md:mb-4 tracking-tight">{studio.name}</h1>
            <p className="text-sm md:text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">{studio.overview}</p>
            
            <div className="flex flex-wrap gap-3 mt-6 md:mt-8">
              {studio.ig && (
                <a href={`https://instagram.com/${studio.ig.replace('@','')}`} target="_blank" rel="noreferrer" className="flex items-center text-xs md:text-sm font-bold text-slate-700 hover:text-white hover:bg-pink-600 bg-slate-100 px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all w-full sm:w-auto justify-center">
                  <Instagram className="w-4 h-4 mr-2" /> {studio.ig}
                </a>
              )}
              {studio.tiktok && (
                <a href="#" className="flex items-center text-xs md:text-sm font-bold text-slate-700 hover:text-white hover:bg-black bg-slate-100 px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all w-full sm:w-auto justify-center">
                  <PlayCircle className="w-4 h-4 mr-2" /> {studio.tiktok}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6 flex items-center">
                <Rocket className="w-6 h-6 md:w-7 md:h-7 mr-3 text-[#35489e]" />
                Fokus Belajar (Stream)
              </h2>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {studio.streams.map((stream, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl md:rounded-2xl px-4 py-3 md:px-6 md:py-4 border border-slate-100 hover:border-[#35489e] transition-colors w-full sm:w-auto">
                    <h3 className="font-bold text-slate-800 text-sm md:text-[15px] text-center sm:text-left">{stream}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 flex items-center">
                <Briefcase className="w-6 h-6 md:w-7 md:h-7 mr-3 text-[#35489e]" />
                Prospek Karir & Skill Set
              </h2>
              
              <div className="mb-8 md:mb-10">
                <h3 className="text-xs md:text-[13px] font-bold text-slate-400 uppercase tracking-widest mb-3 md:mb-4">Peluang Karir</h3>
                <div className="flex flex-wrap gap-2 md:gap-2.5">
                  {studio.careerPath.map((career, idx) => (
                    <span key={idx} className="bg-[#ebf0ff] text-[#243376] px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-[14px] font-semibold border border-[#cdd6ec] hover:bg-[#35489e] hover:text-white transition-colors cursor-default">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs md:text-[13px] font-bold text-slate-400 uppercase tracking-widest mb-3 md:mb-4">Bakal Diajarin Apa Aja?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {studio.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-slate-700 bg-slate-50 p-2.5 md:p-3 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-emerald-500 mr-2 md:mr-3 flex-shrink-0" />
                      <span className="font-medium text-xs md:text-[14px]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Updated Data Alumni Section with solid blue background */}
            <div className="bg-[#35489e] rounded-[2rem] p-6 md:p-10 text-white shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full blur-2xl"></div>
              
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center relative z-10">
                <GraduationCap className="w-6 h-6 md:w-7 md:h-7 mr-3 text-blue-200" />
                Data Alumni
              </h2>
              <div className="space-y-3 md:space-y-4 relative z-10">
                {studio.alumniList.map((alumni, idx) => (
                  <div key={idx} className="bg-[#4a5dc2] border border-[#5d71cc] rounded-xl md:rounded-2xl p-4 flex items-center gap-3 md:gap-4 hover:bg-[#5265cc] transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-[#243376] rounded-full flex items-center justify-center flex-shrink-0 text-base md:text-lg font-bold text-white shadow-inner">
                      {alumni.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm md:text-[15px]">{alumni.name}</p>
                      <p className="text-blue-100 text-xs md:text-[13px] font-medium">{alumni.role} di <span className="font-bold">{alumni.company}</span></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-4 md:mb-6 border-b border-slate-100 pb-4">Tim Pengajar</h3>
              
              <div className="mb-5 md:mb-6">
                <span className="text-[11px] md:text-[12px] font-bold text-slate-400 uppercase tracking-widest block mb-2 md:mb-3">Dosen Pembimbing</span>
                <div className="flex items-center gap-3 bg-slate-50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100">
                   <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold text-sm md:text-base flex-shrink-0">
                     {studio.dosenPembimbing.initial}
                   </div>
                   <p className="font-bold text-slate-800 text-sm md:text-[15px]">{studio.dosenPembimbing.name}</p>
                </div>
              </div>
              
              <div>
                <span className="text-[11px] md:text-[12px] font-bold text-slate-400 uppercase tracking-widest block mb-2 md:mb-3">Dosen Peminatan</span>
                <ul className="space-y-2 md:space-y-3">
                  {studio.dosenPeminatan.map((dosen, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center font-bold text-xs md:text-sm flex-shrink-0">
                        {dosen.initial}
                      </div>
                      <span className="font-medium text-slate-700 text-sm md:text-[14px]">{dosen.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Kata Kating Section */}
            <div className={`rounded-[2rem] p-6 md:p-8 ${studio.color} shadow-xl`}>
              <h3 className="font-bold text-xs md:text-[13px] uppercase tracking-widest mb-4 md:mb-6 flex items-center text-white">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Kata Kating
              </h3>
              <div className="space-y-5 md:space-y-6">
                {studio.seniorInsight.map((insight, idx) => (
                  <div key={idx} className="relative bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-50">
                    <p className="text-slate-700 font-medium leading-relaxed text-sm md:text-[15px] mb-3">
                      {insight.text}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${studio.color} text-white flex items-center justify-center text-[9px] md:text-[10px] font-bold flex-shrink-0`}>
                         {insight.author.charAt(0)}
                      </div>
                      <span className="text-[11px] md:text-xs font-bold text-slate-500">{insight.author}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};


// --- VIEW: SELF ASSESSMENT FLOW (FULL PAGE LANDING) ---

const AssessmentFlow = ({ currentPage, navigateTo }) => {
  // Store all answers
  const [answers, setAnswers] = useState({});
  const [quizPage, setQuizPage] = useState(0); // Pagination state
  const [isCalculating, setIsCalculating] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false); // Agreement state

  useEffect(() => {
    if (currentPage === 'assessment-intro') {
      setAnswers({});
      setQuizPage(0);
      setIsAgreed(false);
    }
  }, [currentPage]);

  const handleStart = () => navigateTo('assessment-guidelines');

  const handleSelectRating = (questionId, rating) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: rating
    }));
  };

  const handleNextPage = () => {
    setQuizPage(1);
    window.scrollTo(0, 0);
  };

  const handlePrevPage = () => {
    setQuizPage(0);
    window.scrollTo(0, 0);
  };

  const handleCalculate = () => {
    // Only proceed if all 20 questions are answered
    if (Object.keys(answers).length < ASSESSMENT_QUESTIONS.length) {
      alert('Mohon jawab semua pertanyaan sebelum melihat hasil.'); // Fallback UI for incomplete
      return;
    }
    
    setIsCalculating(true);
    navigateTo('assessment-result');
    setTimeout(() => {
      setIsCalculating(false);
    }, 2000);
  };


  const getResults = () => {
    const scores = {};
    STUDIOS.forEach(s => scores[s.id] = 0);

    // Calculate score based on answers dictionary
    Object.keys(answers).forEach(qIdStr => {
      const qId = parseInt(qIdStr);
      const rating = answers[qIdStr];
      const question = ASSESSMENT_QUESTIONS.find(q => q.id === qId);
      
      if (!question) return;

      const tags = question.tags;
      
      // Rating 1 = Sangat Tidak Setuju (merah), Rating 5 = Sangat Setuju (hijau)
      // Reverse scale to match requirement: Left(Red/Disagree) -> Right(Green/Agree)
      const weightAgree = rating >= 4 ? (rating - 3) * 2 : 0; // 4->2, 5->4
      const weightDisagree = rating <= 2 ? (3 - rating) * 2 : 0; // 1->4, 2->2

      if (rating >= 3 && tags.agree) {
         tags.agree.forEach(tag => scores[tag] += weightAgree || 1);
      }
      
      if (rating <= 3 && tags.disagree) {
         tags.disagree.forEach(tag => scores[tag] += weightDisagree || 1);
      }
    });

    let scoredStudios = STUDIOS.map(studio => {
      const rawScore = scores[studio.id] || 0;
      const calculatedPercentage = Math.min(99, Math.floor((rawScore * 2.5) + 35 + (Math.random() * 15)));
      return {
        ...studio,
        matchPercentage: calculatedPercentage
      };
    });

    scoredStudios.sort((a, b) => b.matchPercentage - a.matchPercentage);
    return scoredStudios.slice(0, 3);
  };


  // FULL PAGE ASSESSMENT INTRO
  if (currentPage === 'assessment-intro') {
    return (
      <div className="min-h-screen bg-white animate-in fade-in duration-500">
        
        <section className="relative overflow-hidden bg-slate-50 pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-100">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
          
          <div className="absolute -top-32 -left-32 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-48 -right-32 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-12">
              
              <div className="lg:w-1/2 text-center lg:text-left pt-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#ebf0ff] rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4 md:mb-6 shadow-sm border border-blue-100">
                  <Target className="w-8 h-8 md:w-10 md:h-10 text-[#35489e]" />
                </div>
                <h1 className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1a2035] tracking-tight leading-[1.15] md:leading-[1.1] mb-4 md:mb-6">
                  Galau Milih Peminatan? <br className="hidden lg:block"/>
                  <span className="text-[#35489e]">Tes Aja Dulu!</span>
                </h1>
                <p className="text-[15px] sm:text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                  Kuis singkat ini dirancang spesial buat ngebaca gaya belajar, cara kerja, dan minat lo. Santai aja, nggak nyampe 2 menit lo bakal nemu studio mana yang paling klop.
                </p>
                <button 
                  onClick={handleStart}
                  className="w-full sm:w-auto px-8 py-3.5 md:px-12 md:py-5 bg-[#35489e] text-white rounded-full font-bold text-base md:text-xl hover:bg-[#243376] transition-transform hover:-translate-y-1 shadow-xl shadow-[#35489e]/30 flex items-center justify-center mx-auto lg:mx-0"
                >
                  Gas, Mulai Kuisnya!
                  <Zap className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Right Abstract Visual Hero (Hover Fixed) */}
              <div className="order-first lg:order-last lg:w-1/2 w-full mt-4 lg:mt-0 relative h-[320px] md:h-[450px] flex items-center justify-center">
                
                <div className="absolute z-20 bg-white p-4 md:p-6 rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-2 md:mb-3 shadow-inner">
                    <Brain className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <p className="font-bold text-slate-800 text-base md:text-lg">Kenali Diri Lo</p>
                  <p className="text-xs md:text-sm font-medium text-slate-500">100% Akurat</p>
                </div>

                <div className="absolute z-10 top-[10%] left-[5%] md:left-[10%] bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 transform -rotate-6 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 border border-slate-50 group cursor-default">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-[#35489e] group-hover:scale-110 transition-transform" />
                    <div>
                       <p className="font-bold text-slate-800 text-xs md:text-sm">Anti Salah</p>
                    </div>
                </div>

                <div className="absolute z-10 bottom-[15%] right-[5%] md:right-[10%] bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-2 md:gap-3 transform rotate-6 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 border border-slate-50 group cursor-default">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                    <div>
                       <p className="font-bold text-slate-800 text-xs md:text-sm">Sesuai Vibe</p>
                    </div>
                </div>

                <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-2 border-dashed border-[#35489e]/20 animate-spin-slow"></div>
                <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-purple-200/50"></div>
              </div>

            </div>
          </div>
        </section>

        {/* Why take this assessment section */}
        <div className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Kenapa Lo Harus Ikutan Self-Assessment?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center flex flex-col items-center group hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Anti Salah Jurusan</h3>
              <p className="text-slate-600 font-medium">Biar lo nggak nyesel di tengah jalan. Kita bantu arahin ke studio yang prospeknya sejalan sama mimpi lo.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center flex flex-col items-center group hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sesuai Sama Passion Lo</h3>
              <p className="text-slate-600 font-medium">Tiap studio punya ciri khas beda. Kuis ini nyocokin kepribadian lo sama gaya belajar di tiap studio.</p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center flex flex-col items-center group hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Hasil Top 3 Akurat</h3>
              <p className="text-slate-600 font-medium">Sistem bakal nge-kalkulasi jawaban lo dan ngasih 3 rekomendasi studio terbaik beserta persentasenya.</p>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // PRE-ASSESSMENT GUIDELINES
  if (currentPage === 'assessment-guidelines') {
    return (
      <div className="min-h-[85vh] bg-slate-50 p-4 pt-8 md:pt-16 pb-20">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-slate-100 animate-in slide-in-from-bottom-8 duration-500">
           <div className="w-16 h-16 bg-[#ebf0ff] rounded-2xl flex items-center justify-center mb-6 md:mb-8">
             <FileEdit className="w-8 h-8 text-[#35489e]" />
           </div>
           <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">Panduan Pengisian</h2>
           <p className="text-slate-600 mb-8 font-medium text-base md:text-lg">Sebelum mulai, pastiin lo perhatiin beberapa hal ini biar hasilnya maksimal dan akurat buat nentuin peminatan lo:</p>
           
           <ul className="space-y-6 mb-10">
             <li className="flex gap-4 items-start">
               <div className="w-10 h-10 bg-blue-50 text-[#35489e] rounded-full flex items-center justify-center font-extrabold flex-shrink-0 border border-blue-100">1</div>
               <p className="text-slate-700 font-bold text-sm md:text-lg pt-1.5">Jawab sejujur-jujurnya sesuai sama apa yang lo rasain, bukan yang kedengerannya keren atau disuruh temen.</p>
             </li>
             <li className="flex gap-4 items-start">
               <div className="w-10 h-10 bg-blue-50 text-[#35489e] rounded-full flex items-center justify-center font-extrabold flex-shrink-0 border border-blue-100">2</div>
               <p className="text-slate-700 font-bold text-sm md:text-lg pt-1.5">Ngga ada jawaban yang bener atau salah. Ini murni buat ngebaca kepribadian dan gaya kerja lo.</p>
             </li>
             <li className="flex gap-4 items-start">
               <div className="w-10 h-10 bg-blue-50 text-[#35489e] rounded-full flex items-center justify-center font-extrabold flex-shrink-0 border border-blue-100">3</div>
               <p className="text-slate-700 font-bold text-sm md:text-lg pt-1.5">Pilih skala yang paling mewakili diri lo. Dari sangat tidak setuju sampai sangat setuju.</p>
             </li>
           </ul>

           <label className="flex items-center gap-4 cursor-pointer p-4 md:p-5 bg-slate-50 rounded-2xl border border-slate-200 mb-10 hover:bg-slate-100 transition-colors">
             <input 
               type="checkbox" 
               className="w-6 h-6 rounded border-slate-300 text-[#35489e] focus:ring-[#35489e] accent-[#35489e] cursor-pointer" 
               checked={isAgreed} 
               onChange={(e) => setIsAgreed(e.target.checked)} 
             />
             <span className="font-extrabold text-slate-800 text-base md:text-lg">Gue udah paham panduannya dan siap ngisi.</span>
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

  // QUIZ VIEW (Continuous List Likert Scale)
  if (currentPage === 'assessment-quiz') {
    const answeredCount = Object.keys(answers).length;
    const progress = (answeredCount / ASSESSMENT_QUESTIONS.length) * 100;
    
    // Pagination logic
    const questionsPerPage = 10;
    const startIdx = quizPage * questionsPerPage;
    const endIdx = startIdx + questionsPerPage;
    const currentQuestions = ASSESSMENT_QUESTIONS.slice(startIdx, endIdx);
    
    const isCurrentPageComplete = currentQuestions.every(q => answers[q.id]);
    const isAllComplete = answeredCount === ASSESSMENT_QUESTIONS.length;

    return (
      <div className="min-h-screen bg-slate-50 py-8 md:py-12 relative animate-in fade-in duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8 text-center md:text-left">Self-Assessment Peminatan</h1>

          {/* Progress Header Sticky */}
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-200 sticky top-20 z-40 mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm md:text-base font-bold text-slate-700">Menampilkan {startIdx + 1}-{Math.min(endIdx, ASSESSMENT_QUESTIONS.length)} dari {ASSESSMENT_QUESTIONS.length}</span>
              <span className="text-sm md:text-base font-bold text-[#35489e]">{Math.round(progress)}% Selesai</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5">
              <div className="bg-[#35489e] h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-xs text-slate-500 font-medium mt-3 text-center md:text-left">Jawab semua pernyataan di bawah buat lanjut ke tahap berikutnya.</p>
          </div>

          {/* List of Questions */}
          <div className="space-y-6 md:space-y-8 pb-10">
            {currentQuestions.map((q, index) => {
               const currentVal = answers[q.id];
               const globalIndex = startIdx + index + 1;

               return (
                 <div key={q.id} className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 hover:border-blue-100 transition-colors">
                    <p className="text-base md:text-xl font-bold text-slate-900 text-center mb-8 md:mb-10 leading-relaxed px-2">
                       {globalIndex}. {q.question}
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-2 md:px-8">
                       <span className="text-xs font-bold text-rose-500 uppercase tracking-wider hidden md:block w-24 text-right">Sangat Tidak Setuju</span>
                       
                       <div className="flex justify-between w-full md:w-auto gap-3 md:gap-6 relative">
                         {/* Desktop connecting line */}
                         <div className="hidden md:block absolute top-1/2 left-4 right-4 h-1 bg-slate-100 -z-10 transform -translate-y-1/2"></div>
                         
                         {/* Scale 1 (Sangat Tdk Setuju) to 5 (Sangat Setuju) */}
                         {[1, 2, 3, 4, 5].map((val) => {
                            const isSelected = currentVal === val;
                            let sizeClass = "w-8 h-8 md:w-10 md:h-10"; 
                            let colorClass = "border-slate-300 bg-white";
                            
                            // Reversed Scale: 1 = Sangat Tidak Setuju (Merah), 5 = Sangat Setuju (Hijau)
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
                       
                       {/* Mobile Labels (Underneath buttons) */}
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
             {quizPage > 0 ? (
               <button
                  onClick={handlePrevPage}
                  className="px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base bg-slate-200 text-slate-600 hover:bg-slate-300 transition-all flex items-center w-full sm:w-auto justify-center"
               >
                  <ArrowLeft className="w-5 h-5 mr-2" /> Kembali
               </button>
             ) : <div className="hidden sm:block"></div>}

             {quizPage === 0 ? (
               <button
                  onClick={handleNextPage}
                  disabled={!isCurrentPageComplete}
                  className={`px-8 py-3.5 md:px-12 md:py-4 rounded-full font-bold text-sm md:text-base transition-all flex items-center w-full sm:w-auto justify-center shadow-lg ${
                    isCurrentPageComplete 
                      ? 'bg-[#35489e] text-white hover:bg-[#243376] shadow-[#35489e]/30 hover:-translate-y-1' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                  }`}
               >
                  Lanjut ke Page 2 <ArrowRight className="w-5 h-5 ml-2" />
               </button>
             ) : (
               <button
                  onClick={handleCalculate}
                  disabled={!isAllComplete}
                  className={`px-8 py-3.5 md:px-12 md:py-4 rounded-full font-bold text-sm md:text-base transition-all flex items-center w-full sm:w-auto justify-center shadow-lg ${
                    isAllComplete 
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/30 hover:-translate-y-1' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
                  }`}
                >
                  Lihat Hasil Kecocokan
               </button>
             )}
          </div>

        </div>
      </div>
    );
  }

  // RESULTS VIEW
  if (currentPage === 'assessment-result') {
    if (isCalculating) {
      return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center bg-slate-50 p-4">
           <div className="animate-spin w-16 h-16 md:w-20 md:h-20 border-4 border-[#cdd6ec] border-t-[#35489e] rounded-full mb-6 md:mb-8"></div>
           <h2 className="text-2xl md:text-3xl font-bold text-slate-900 animate-pulse text-center">Sabar cuy, lagi diitung...</h2>
           <p className="text-slate-500 mt-2 md:mt-3 font-medium text-base md:text-lg text-center">Nyari kecocokan dari 14 studio</p>
        </div>
      );
    }

    const topStudios = getResults();
    const top1 = topStudios[0];

    return (
      <div className="min-h-screen bg-slate-50 py-10 md:py-16 animate-in zoom-in-95 duration-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 md:mb-4 tracking-tight">Ini Hasil Anda</h1>
            <p className="text-[14px] sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium px-2 leading-relaxed">
              Berdasarkan jawaban barusan, sistem kami udah nge-scan studio mana yang paling nyambung sama personality dan gaya kerja lo.
            </p>
          </div>

          {/* HIGHLIGHT TOP 1 */}
          <div className="mb-8 md:mb-12">
            <div className="bg-[#35489e] rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-6 md:gap-8 items-center border-4 border-[#ebf0ff]">
              
              <div className="absolute -top-20 -right-20 md:-top-32 md:-right-32 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-20 -left-20 md:-bottom-32 md:-left-32 w-64 h-64 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start z-10 text-center lg:text-left">
                <div className="inline-flex items-center justify-center whitespace-nowrap bg-yellow-400 text-yellow-900 font-bold px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-widest shadow-lg">
                  <Award className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" /> Paling Cocok
                </div>
                
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-[2rem] bg-white flex items-center justify-center text-[#35489e] shadow-xl mb-4 md:mb-6">
                  <top1.icon className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                
                <div className="text-white">
                  <span className="block text-5xl md:text-6xl font-extrabold">{top1.matchPercentage}%</span>
                  <span className="text-xs md:text-sm font-bold text-blue-200 uppercase tracking-widest">Tingkat Kecocokan</span>
                </div>
              </div>

              <div className="w-full lg:w-2/3 z-10 text-center lg:text-left">
                <p className="text-blue-200 font-bold text-sm md:text-lg mb-1 md:mb-2 uppercase tracking-wider">{top1.focus}</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">{top1.name}</h2>
                
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-2xl mb-6 md:mb-8 text-left">
                  <h3 className="text-yellow-400 font-bold text-base md:text-lg mb-2 flex items-center">
                     Karakter Lo: {top1.persona}
                  </h3>
                  <p className="text-white font-medium text-sm md:text-lg leading-relaxed">
                    {top1.matchReason}
                  </p>
                </div>

                <button 
                  onClick={() => navigateTo('studio-detail', top1)}
                  className="w-full sm:w-auto px-8 md:px-10 py-3.5 md:py-4 bg-white text-[#35489e] rounded-full font-bold text-base md:text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Gali Lebih Dalam Tentang {top1.name}
                </button>
              </div>
            </div>
          </div>

          {/* RUNNER UPS */}
          <div className="text-center mb-6 md:mb-8">
             <h3 className="text-xl md:text-2xl font-bold text-slate-800">Alternatif Kece Lainnya</h3>
             <p className="text-sm md:text-base text-slate-500 font-medium px-2">Kalo masih ragu, dua studio ini juga punya persentase kecocokan yang tinggi sama lo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16">
            {topStudios.slice(1).map((studio, index) => (
              <div 
                key={studio.id} 
                className="bg-white rounded-3xl md:rounded-[2rem] p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 group"
              >
                <div className="flex justify-between items-start mb-5 md:mb-6 z-10">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-white ${studio.color} shadow-lg`}>
                     <studio.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl md:text-3xl font-extrabold text-slate-900">{studio.matchPercentage}%</span>
                    <span className="text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-widest">Match</span>
                  </div>
                </div>

                <div className="z-10 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 group-hover:text-[#35489e] transition-colors">{studio.name}</h3>
                  <p className="text-[#35489e] font-bold text-xs md:text-[14px] mb-3 md:mb-4">{studio.focus}</p>
                  <p className="text-slate-600 font-medium text-xs md:text-[14px] leading-relaxed">
                     <span className="text-slate-800 font-bold block mb-1">Karakter Lo: {studio.persona}</span>
                     {studio.shortDesc}
                  </p>
                </div>

                <button 
                  onClick={() => navigateTo('studio-detail', studio)}
                  className="mt-5 md:mt-6 w-full py-3 md:py-3.5 rounded-xl font-bold text-xs md:text-[14px] bg-slate-100 text-slate-700 hover:bg-[#35489e] hover:text-white transition-colors z-10"
                >
                  Kepoin {studio.name}
                </button>
              </div>
            ))}
          </div>
          
          <div className="text-center bg-white p-6 md:p-8 rounded-3xl border border-slate-100 max-w-lg mx-auto shadow-sm">
            <h3 className="font-bold text-slate-800 mb-2 text-sm md:text-base">Masih kurang srek atau iseng pengen tes ulang?</h3>
            <button 
              onClick={() => navigateTo('assessment-intro')}
              className="text-[#35489e] hover:text-[#243376] font-bold text-sm md:text-base underline decoration-2 underline-offset-4"
            >
              Ulangi Kuisnya
            </button>
          </div>

        </div>
      </div>
    );
  }

  return null;
};