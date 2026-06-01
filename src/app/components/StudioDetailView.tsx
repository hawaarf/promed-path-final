import React, { useState } from 'react';
import { 
  ArrowLeft, ArrowRight, Instagram, PlayCircle, Rocket, Briefcase, 
  CheckCircle2, GraduationCap, Building, Users, MessageSquare, 
  Linkedin, X as XIcon 
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from 'recharts';
import { STUDIOS } from '../../imports/pasted_text/studios-data';
import mvpBanner from '../../imports/alex-haney-BhQZrxDq9oo-unsplash.jpg';
import iconBanner from '../../imports/WhatsApp_Image_2026-05-30_at_14.59.15.jpeg';
import toboBanner from '../../imports/WhatsApp_Image_2026-05-30_at_14.59.27.jpeg';
import mosaicBanner from '../../imports/WhatsApp_Image_2026-05-26_at_19.06.26.jpeg';
import orangfilmBanner from '../../imports/WhatsApp_Image_2026-05-26_at_19.06.26__1_.jpeg';
import fluiBanner from '../../imports/WhatsApp_Image_2026-05-26_at_19.04.43.jpeg';
import voteBanner from '../../imports/WhatsApp_Image_2026-05-26_at_19.04.43__1_.jpeg';
import pojokomikBanner from '../../imports/WhatsApp_Image_2026-05-26_at_15.20.16__1_.jpeg';
import pixelpalsBanner from '../../imports/WhatsApp_Image_2026-05-26_at_15.20.16.jpeg';
import spiceBanner from '../../imports/WhatsApp_Image_2026-05-26_at_18.57.00.jpeg';
import oxlabBanner from '../../imports/WhatsApp_Image_2026-05-26_at_18.58.36.jpeg';
import stageBanner from '../../imports/kyle-head-p6rNTdAPbuk-unsplash.jpg';
import wireBanner from '../../imports/gabriel-gurrola-2UuhMZEChdc-unsplash.jpg';
import kulsBanner from '../../imports/eleni-afiontzi-gLU8GZpHtRA-unsplash.jpg';
import evosLogo from '../../imports/download.jpg';
import rrqLogo from '../../imports/6181ba46bdc35974040406.png';
import mineskiLogo from '../../imports/1641559923873.jpg';
import transvisionLogo from '../../imports/TransVision_logo.png';
import viuLogo from '../../imports/Viu_logo.svg.png';
import reddoorzLogo from '../../imports/RedDoorz.png';
import maverickLogo from '../../imports/Maverick.jpg';
import mapActiveLogo from '../../imports/MAP_Active_logo.png';
import kgMediaLogo from '../../imports/KG_Media.jpg';
import gotoLogo from '../../imports/GoTo.png';
import catchplayLogo from '../../imports/Catchplay.png';
import kompasComLogo from '../../imports/Kompas.com.PNG';
import cnnIndonesiaLogo from '../../imports/Logo_CNN_Indonesia.png';
import kompasTvLogo from '../../imports/Logo_Kompas_TV.png';
import sekretariatPresLogo from '../../imports/Logo_Sekretariat_Presiden_RI.jpg';
import metroTvLogo from '../../imports/c8e1b922feffed99346980caf84e42e3.png';
import seaTodayLogo from '../../imports/Sea_Today.jpg';
import trans7Logo from '../../imports/Trans_7.png';
import akgLogo from '../../imports/AKG.png';
import emcoLogo from '../../imports/Emco.png';
import endgameLogo from '../../imports/ENDGAME.png';
import faberCastellLogo from '../../imports/Faber_Castell.png';
import emcoToboLogo from '../../imports/emco_logo.jpeg';
import emwayLogo from '../../imports/emway-logo-1.png';
import baseEntertainmentLogo from '../../imports/Base-Entertaiment-Favicon.jpg';
import ciadLogo from '../../imports/ciad.jpg';
import dalopezLogo from '../../imports/dalopez.jpg';
import jfwLogo from '../../imports/Jakarta_Fashion_Week.jpg';
import kgMediaOrangFilmLogo from '../../imports/KG_Media-1.jpg';
import kompasOrangFilmLogo from '../../imports/Kompas.png';
import mdPicturesLogo from '../../imports/Logo_MD_Pictures__2025_.png';
import palariLogo from '../../imports/palari.jpeg';
import visinemaLogo from '../../imports/unnamed.jpg';
import kulsLogo1 from '../../imports/download__1_.png';
import kulsLogo2 from '../../imports/download__2_.png';
import kulsLogo3 from '../../imports/download__3_.png';
import kulsLogo4 from '../../imports/images__1_.png';
import kulsLogo5 from '../../imports/logo_densu.jpg';
import kulsLogo6 from '../../imports/images.png';
import marissaAnitaPhoto from '../../imports/MFnvlLfx_400x400.jpg';
import jakartaMovinLogo from '../../imports/images__1_-1.png';
import durrayPhoto from '../../imports/Mas_Durray.jpeg';
import livanderPhoto from '../../imports/Mas_Livander.jpeg';
import ardhanPhoto from '../../imports/Pak_Ardhan.jpeg';
import ciptoPhoto from '../../imports/pak_cipto.jpg';
import ririsPhoto from '../../imports/riris-marpaung-6564350433888.jpeg';
import shafiqPhoto from '../../imports/images__3_.jpg';
import togeProductionsLogo from '../../imports/Toge_Productions_logo.png';
import aimToMiteLogo from '../../imports/logo1-2-1.png';
import extraLifeLogo from '../../imports/Logo_Extra_Life_Entertainment_outline_white.png';
import gameChangerLogo from '../../imports/unnamed__1_.jpg';
import agiLogo from '../../imports/02df328d44f196dc4f045c0e67536863c5786ae1_full.jpg';
import jenniferPhoto from '../../imports/1721915004525.jpg';
import gatraPhoto from '../../imports/1657432184290.jpg';
import ploopyLogo from '../../imports/FOTO_linkedIn_LOGO_tim_Ploopy_Animation.jpg';
import pamelaPhoto from '../../imports/1622542657449.jpg';
import visinemaPixelPalsLogo from '../../imports/LOGO_Visinema_Studios.png';
import mncAnimationLogo from '../../imports/LOGO_MNC_Animation.jpg';
import evosPixelPalsLogo from '../../imports/LOGO_EVOS.jpg';
import faberCastellPixelPalsLogo from '../../imports/6aa896eea16dc87bcc526ede4bd0ec24.jpg';
import kisaiEntertainmentLogo from '../../imports/ICON_Kisai_Entertaiment-1.png';
import bumiLangitLogo from '../../imports/LOGO_Bumi_Langit.png';
import arielaPhoto from '../../imports/1588012543917.jpg';
import elleFluiLogo from '../../imports/Logo_ELLE_Indonesia.png';
import mraGroupLogo from '../../imports/Logo_MRA_Group.jpg';
import claraFluiLogo from '../../imports/Logo_CLARA_Indonesia.png';
import ussNetworksLogo from '../../imports/Logo_USS_Networks.png';
import gcmGroupLogo from '../../imports/Logo_GCM_Group.png';
import multiBintangLogo from '../../imports/Logo_Multi_Bintang_Indonesia.png';
import cosmopolitanFluiLogo from '../../imports/Logo_COSMOPOLITAN_Indonesia.png';
import lorealLogo from '../../imports/Logo_LOREAL_Indonesia.jpg';
import jfwFluiLogo from '../../imports/Logo_JFW.jpg';
import chrisBunjaminPhoto from '../../imports/Chris_Bunjamin.jpg';
import davyLinggarFluiPhoto from '../../imports/Davy_Linggar.jpg';
import hanaAnditaPhoto from '../../imports/Hana_Andita_Devarianti.jpg';
import monicaEstherPhoto from '../../imports/Monica_Esther.jpg';
import monikaArdiantiPhoto from '../../imports/Monika_Ardianti_Sugiharso.jpg';
import pettyFatimahPhoto from '../../imports/Petty_S._Fatimah.jpg';
import riaLirunganPhoto from '../../imports/Ria_Lirungan__pojok_kanan_.jpg';
import sarahHasiannaPhoto from '../../imports/Sarah_Hasianna_Meiliana.jpg';
import svidaAlisjahbanaPhoto from '../../imports/Svida_Alisjahbana.jpg';
import michoGunawanPhoto from '../../imports/Micho_Gunawan__M.M._-_Senior_UX_Designer_at__Paper.png';
import annaSetiyaniPhoto from '../../imports/Anna_Setiyani.png';
import brilyanNathanaelPhoto from '../../imports/Brilyan_Nathanael_Rumarhobo_MKom_Software_Engineer_at_PT_Wide_Technologies_Indonesia_Software_Engineer_at_PT_Wide_Technologies_I.png';
import hendrikaGaudensPhoto from '../../imports/Hendrika_Gaudens_Refwal_Country_Marketing_and_Comms_Lead_at__IBM_Indonesia_Country_Marketing_and_Comms_Lead_at__IBM_Indonesia.png';
import rifanKurniaPhoto from '../../imports/Rifan_Kurnia_msi__VP_of_Data_Engineering_at_Devoteam_VP_of_Data__Engineering_at_Devoteam.png';
import wafaTaftazaniPhoto from '../../imports/Wafa_Taftazani.jpg';
import yevonnaelAndrewPhoto from '../../imports/Yevonnael_Andrew.jpg';
import faransinaOliviaPhoto from '../../imports/_Faransina_Olivia_Rumere__M.S._-_Data_Scientist_at_University_Of_Chicago.jpg';
import fransiscaAgrikaPhoto from '../../imports/Fransisca_Agrika_Lintang_Astuti__M.Si._-_Supply___Operation_Planning_Lead_at__ASTRO.jpg';
import nathanaelWaraneyPhoto from '../../imports/Nathanael_Waraney_Gerald_Massie__MCIT_-_Economist_at_Prospera.jpg';
import alexanderTendoPhoto from '../../imports/Alexander_Tendo_A.__M.A.B._-_Founder_at_Tenstud.jpg';
import stephenNgPhoto from '../../imports/Stephen_Ng__M.I.M.__M.I.T.R.__M.I.R._-_Group_Metaverse_Officer_at__WIR_GROUP.jpg';
import adiWijayaPhoto from '../../imports/Adi_Wijaya_Gani__Ph.D._-_Chief_Technology_Officer_at_Regenesis.jpg';
import elysabetPurbaPhoto from '../../imports/_Elysabet_Purba__M.A.B._-_Head_of_Retail_at__Acer.jpg';
import hendrikaGaudensRefwaluPhoto from '../../imports/Hendrika_Gaudens_Refwalu__M.M._-_Country_Marketing_and_Comms_Lead_at__IBM_Indonesia.jpg';
import herryantiHermanPhoto from '../../imports/Herryanti_Herman__M.M._-_Director_at__PT_Mitra_Integrasi_Informatika__Metrodata.jpg';
import marinaKacaribuPhoto from '../../imports/_Marina_Kacaribu__M.Sc._-_Country_Managing_Director_at_Cisco_System_Indonesia.jpg';
import poonamSagarPhoto from '../../imports/Poonam_Sagar__M.B.A._-_CEO_at_PT_Infotech_Solutions.jpg';
import widiantyPhoto from '../../imports/_Widianty__M.M._-__Head_of_IT_SBU_Biopharma_at_PT_Kalbe_Farma.jpg';
import euniceRatnaPhoto from '../../imports/__Dr._Eunice_Ratna_Sari_-_Co-Founder_at__CX_INSIGHT__Australia.png';
import ketutSulistyawatiPhoto from '../../imports/_Dr._Ketut_Sulistyawati__Director__Principal_Consultant_at_Somia_CX_.jpg';
import adiWijayaUpdatedPhoto from '../../imports/Adi_Wijaya_Gani__Ph.D._-_Chief_Technology_Officer_at_Regenesis-1.jpg';
import albertDarmawanPhoto from '../../imports/Albert_Darmawan__M.S._-_Software_Engineer_at_Canva.jpg';
import annaSetiyaniUpdatedPhoto from '../../imports/Anna_Setiyani__M.M.S.I._-_Software_Engineer_at_L_p_Events__Australia.jpg';
import bernJonathanPhoto from '../../imports/Bern_Jonathan__M.T.I._-_Data_Engineer_at_Tech_in_Asia.jpg';
import brilyanNathanaelUpdatedPhoto from '../../imports/Brilyan_Nathanael_Rumarhobo__M.Kom._-_Software_Engineer_at_PT_Wide_Technologies_Indonesia.jpg';
import budiSetiawanPhoto from '../../imports/Budi_Setiawan__M.M._-_Customer_Solutions_Consultant_for_SAP_on_Google_Cloud.jpg';
import irvingArnaldoPhoto from '../../imports/_Irving_Arnaldo_Hutagalung__M.A.B._-_Country_Engineering_Lead_at_Microsoft.jpg';
import jassonHarsojoPhoto from '../../imports/Jasson_Harsojo__M.M._-_Software_Engineer_at_Traveloka.jpg';
import cxInsightLogo from '../../imports/logo-cxi.png';
import ibmSpiceLogo from '../../imports/images__2_.png';
import theHagueLogo from '../../imports/images__3_.png';
import metrodataLogo from '../../imports/images__4_.png';
import gianHashemiPhoto from '../../imports/Mr_Gian_.jpeg';
import haruchikaSediadiPhoto from '../../imports/Mr_Haruchika.jpeg';
import kukuhRizalPhoto from '../../imports/Mr_Keke.jpeg';
import rezaHilmawanPhoto from '../../imports/Mr_Mahwari.jpeg';
import radityaDikaPhoto from '../../imports/Mr_Radit.jpeg';
import andienAisyahPhoto from '../../imports/Ms_Andien.jpeg';
import gabrielCheminPhoto from '../../imports/Mr_Chemin.jpeg';
import tunecoreLogo from '../../imports/TuneCore_Logo.jpg';
import ramaPhoto from '../../imports/1691302473416.jpg';
import andrianPhoto from '../../imports/Profil-Pak-AP-RRQ.jpg';
import oskarPhoto from '../../imports/1635395025439.jpg';
import maulanaPhoto from '../../imports/Maulana_Arif.jpg';
import feliciaPhoto from '../../imports/Felicia_Nugroho__M.I.B..jpg';
import putriPhoto from '../../imports/E._Putri_Silalahi__M.I.Kom.jpg';
import daniaPhoto from '../../imports/Dania_Rari_Pratiwi._M.Sc.jpg';
import angelinePhoto from '../../imports/Angeline_Djosef.png';
import andyPhoto from '../../imports/Andy_Budiman_Kumala__M.B.A..jpg';
import alifPhoto from '../../imports/Alif_Keenan_Ibrahim__M.A..jpg';
import joshuaPhoto from '../../imports/1517580256164.jpg';
import natanaelPhoto from '../../imports/Natanael_Waraney_Gerald_Mossie__MCIT__1_.jpg';
import reynaPhoto from '../../imports/Reyna_Cheryl_Sondahk__M.S.E__1_.jpg';
import ninukPhoto from '../../imports/Ninuk_Mardiana_Pambudy.jpg';
import ariefPhoto from '../../imports/Arief_Suditomo.jpg';
import atiPhoto from '../../imports/Ati_Nurbaiti.jpg';
import defaryPhoto from '../../imports/Dex_Glenn_za_at_Sports_Performance_Lab_Kanoya_JP2.jpg';
import lestariPhoto from '../../imports/Dr._R._Lestari_Moerdijat_.png';
import ellyPhoto from '../../imports/WhatsApp-Image-2024-10-22-at-11.58.56-AM.jpeg';
import firziePhoto from '../../imports/Firzie_Adrian_Idris.jpg';
import frederikaPhoto from '../../imports/Frederika_Korain.jpg';
import indraPhoto from '../../imports/Indra_P_Marpaung.jpg';
import nikiPhoto from '../../imports/images__1_.jpg';
import ardiatmaPhoto from '../../imports/Ardiatma_Mahardika.png';
import dennisPhoto from '../../imports/Dennis_Adhiswara.png';
import faisalPhoto from '../../imports/Faisal_Teguh_Pratama.png';
import indrienaPhoto from '../../imports/Indriena_Y._Basarah__M.A.png';
import thomasPhoto from '../../imports/Thomas_Dirghayusa_G__M.A.png';
import evelinePhoto from '../../imports/Eveline_Dau_Leja__M.A..jpg';
import dianPhoto from '../../imports/Dian_Sastrowardoyo__M.M..jpg';
import davyPhoto from '../../imports/Davy-Linggar-768x1024.jpeg';
import teddyPhoto from '../../imports/images__2_.jpg';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-5 border-b border-slate-100">
          <h3 className="font-extrabold text-lg text-slate-800">{title}</h3>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-full transition-colors">
            <XIcon className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export const StudioDetailView = ({ studio, navigateTo }) => {
  const [activeModal, setActiveModal] = useState(null);

  if (!studio) return null;

  // Augment studio data for the new requirements
  const chartOptions = [
    [30, 20, 20, 30], [25, 25, 25, 25], [40, 10, 20, 30], [15, 35, 30, 20], [20, 40, 20, 20]
  ];

  // Studio-specific distributions
  const studioDistributions = {
    'mvp': [20, 20, 0, 60], // 20% Engineer, 20% Designer, 0% Artist, 60% Project Manager
    'mosaic': [50, 0, 0, 50], // 50% Engineer, 0% Designer, 0% Artist, 50% Project Manager
    'vote': [0, 0, 50, 50], // 0% Engineer, 0% Designer, 50% Artist, 50% Project Manager
    'icon': [0, 0, 0, 100], // 0% Engineer, 0% Designer, 0% Artist, 100% Product Manager
    'tobo': [0, 100, 0, 0], // 0% Engineer, 100% Designer, 0% Artist, 0% Product Manager
    'orangfilm': [0, 0, 60, 40], // 0% Engineer, 0% Designer, 60% Artist, 40% Project Manager
    'pixelpals': [0, 50, 50, 0], // 0% Engineer, 50% Designer, 50% Artist, 0% Product Manager
    'pojokomik': [0, 0, 100, 0], // 0% Engineer, 0% Designer, 100% Artist, 0% Product Manager
    'flui': [0, 0, 50, 50], // 0% Engineer, 0% Designer, 50% Artist, 50% Project Manager
    'spice': [67, 17, 16, 0], // 67% Engineer, 17% Designer, 16% Artist, 0% Product Manager
    'oxlab': [25, 25, 25, 25], // 25% Engineer, 25% Designer, 25% Artist, 25% Product Manager
    'wire': [25, 0, 25, 50], // 25% Engineer, 0% Designer, 25% Artist, 50% Project Manager
    'kuls': [0, 0, 0, 100], // 0% Engineer, 0% Designer, 0% Artist, 100% Project Manager
    'stage': [0, 0, 50, 50], // 0% Engineer, 0% Designer, 50% Artist, 50% Project Manager
  };

  const distro = studioDistributions[studio.id] || chartOptions[studio.name.length % chartOptions.length];
  const pieData = [
    { name: 'ENGINEER', value: distro[0], color: '#35489e' },
    { name: 'DESIGNER', value: distro[1], color: '#8b5cf6' },
    { name: 'ARTIST', value: distro[2], color: '#f43f5e' },
    { name: (studio.id === 'mvp' || studio.id === 'mosaic' || studio.id === 'vote' || studio.id === 'orangfilm' || studio.id === 'flui' || studio.id === 'wire' || studio.id === 'kuls' || studio.id === 'stage') ? 'PROJECT MANAGER' : 'PRODUCT MANAGER', value: distro[3], color: '#10b981' }
  ];

  // Studio-specific banner images
  const studioBanners = {
    'mvp': mvpBanner,
    'icon': iconBanner,
    'tobo': toboBanner,
    'mosaic': mosaicBanner,
    'orangfilm': orangfilmBanner,
    'flui': fluiBanner,
    'vote': voteBanner,
    'pojokomik': pojokomikBanner,
    'pixelpals': pixelpalsBanner,
    'spice': spiceBanner,
    'oxlab': oxlabBanner,
    'stage': stageBanner,
    'wire': wireBanner,
    'kuls': kulsBanner,
  };

  const imageBanner = studioBanners[studio.id] || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=400&fit=crop';

  // Studio-specific dosen
  const studioDosen = {
    'mvp': [
      { name: 'Rama Adityadarma, B.A., M.A.', stream: 'Lecturer', image: ramaPhoto },
      { name: 'Andrian Pauline Husen, M.B.A.', stream: 'Lecturer', image: andrianPhoto },
      { name: 'Oskar Syahbana, M.B.A.', stream: 'Lecturer', image: oskarPhoto },
    ],
    'mosaic': [
      { name: 'Joshua Paundra, Ph.D.', stream: 'Head of Studio', image: joshuaPhoto },
      { name: 'Maulana Arif, M.M.', stream: 'Lecturer', image: maulanaPhoto },
      { name: 'Felicia Nugroho, M.I.B.', stream: 'Lecturer', image: feliciaPhoto },
      { name: 'E. Putri Silalahi, M.I.Kom.', stream: 'Lecturer', image: putriPhoto },
      { name: 'Dania Rari Pratiwi, M.Sc.', stream: 'Lecturer', image: daniaPhoto },
      { name: 'Angeline Djosef, M.A.', stream: 'Lecturer', image: angelinePhoto },
      { name: 'Andy Budiman Kumala, M.B.A.', stream: 'Lecturer', image: andyPhoto },
      { name: 'Alif Keenan Ibrahim, M.A.', stream: 'Lecturer', image: alifPhoto },
      { name: 'Natanael Waraney Gerald Mossie, MCIT', stream: 'Lecturer', image: natanaelPhoto },
      { name: 'Reyna Cheryl Sondahk, M.S.E.', stream: 'Lecturer', image: reynaPhoto },
    ],
    'vote': [
      { name: 'Ninuk Mardiana Pambudy', stream: 'Lecturer', image: ninukPhoto },
      { name: 'Arief Suditomo', stream: 'Lecturer', image: ariefPhoto },
      { name: 'Ati Nurbaiti', stream: 'Lecturer', image: atiPhoto },
      { name: 'Defary Glenniza', stream: 'Lecturer', image: defaryPhoto },
      { name: 'Dr. R. Lestari Moerdijat', stream: 'Lecturer', image: lestariPhoto },
      { name: 'Elly Burhaini', stream: 'Lecturer', image: ellyPhoto },
      { name: 'Firzie Adrian Idris', stream: 'Lecturer', image: firziePhoto },
      { name: 'Frederika Korain', stream: 'Lecturer', image: frederikaPhoto },
      { name: 'Indra P Marpaung', stream: 'Lecturer', image: indraPhoto },
      { name: 'Niki Charles Laoh', stream: 'Lecturer', image: nikiPhoto },
    ],
    'icon': [
      { name: 'Ardiatma Mahardika', stream: 'Lecturer', image: ardiatmaPhoto },
      { name: 'Dennis Adhiswara', stream: 'Lecturer', image: dennisPhoto },
      { name: 'Faisal Teguh Pratama', stream: 'Lecturer', image: faisalPhoto },
      { name: 'Indriena Y. Basarah, M.A.', stream: 'Lecturer', image: indrienaPhoto },
      { name: 'Thomas Dirghayusa G, M.A.', stream: 'Lecturer', image: thomasPhoto },
    ],
    'tobo': [
      { name: 'Eveline Dau Leja, M.A.', stream: 'Lecturer', image: evelinePhoto },
    ],
    'orangfilm': [
      { name: 'Dian Sastrowardoyo, M.M.', stream: 'Lecturer', image: dianPhoto },
      { name: 'Davy Linggar', stream: 'Lecturer', image: davyPhoto },
      { name: 'Teddy Soeriaatmadja, M.A.', stream: 'Lecturer', image: teddyPhoto },
      { name: 'Visinema Pictures', stream: 'Lecturer', image: visinemaLogo },
    ],
    'kuls': [],
    'stage': [
      { name: 'Marissa Anita, M.A.', stream: 'Lecturer', image: marissaAnitaPhoto },
      { name: 'JakartaMovin', stream: 'Lecturer', image: jakartaMovinLogo },
    ],
    'oxlab': [
      { name: 'Duray Philip Rompas, M.T.', stream: 'Head of Studio', image: durrayPhoto },
      { name: 'Livander Surya', stream: 'Lecturer', image: livanderPhoto },
      { name: 'Muhammad Ardhan Fadhlurrahman, M.A', stream: 'Lecturer', image: ardhanPhoto },
      { name: 'Riris Marpaung, M. Hum.', stream: 'Lecturer', image: ririsPhoto },
      { name: 'Shafiq Husein', stream: 'Lecturer', image: shafiqPhoto },
      { name: 'Cipto Adiguno', stream: 'Lecturer', image: ciptoPhoto },
    ],
    'pixelpals': [
      { name: 'Jennifer Leonita Tanuwijaya, M.M.', stream: 'Head of Studio', image: jenniferPhoto },
      { name: 'Fx. Gatra Prameswara, M.A.', stream: 'Lecturer', image: gatraPhoto },
      { name: 'Ploopy Animation', stream: 'Lecturer', image: ploopyLogo },
      { name: 'Pamela Suryadjaya, M.M.', stream: 'Lecturer', image: pamelaPhoto },
    ],
    'pojokomik': [
      { name: 'Ariela Kristantina, M.F.A.', stream: 'Lecturer', image: arielaPhoto },
    ],
    'flui': [
      { name: 'Chris Bunjamin', stream: 'Lecturer', image: chrisBunjaminPhoto },
      { name: 'Davy Linggar', stream: 'Lecturer', image: davyLinggarFluiPhoto },
      { name: 'Hana Andita Devarianti', stream: 'Lecturer', image: hanaAnditaPhoto },
      { name: 'Monica Esther', stream: 'Lecturer', image: monicaEstherPhoto },
      { name: 'Monika Ardianti Sugiharso', stream: 'Lecturer', image: monikaArdiantiPhoto },
      { name: 'Petty S. Fatimah', stream: 'Lecturer', image: pettyFatimahPhoto },
      { name: 'Ria Lirungan', stream: 'Lecturer', image: riaLirunganPhoto },
      { name: 'Sarah Hasianna Meiliana', stream: 'Lecturer', image: sarahHasiannaPhoto },
      { name: 'Svida Alisjahbana', stream: 'Lecturer', image: svidaAlisjahbanaPhoto },
    ],
    'spice': [
      { name: 'Micho Gunawan, M.M.', stream: 'Head of Studio', image: michoGunawanPhoto },
      { name: 'Anna Setiyani, M.M.S.I.', stream: 'Lecturer', image: annaSetiyaniUpdatedPhoto },
      { name: 'Brilyan Nathanael Rumarhobo, M.Kom.', stream: 'Lecturer', image: brilyanNathanaelUpdatedPhoto },
      { name: 'Hendrika Gaudens Refwalu, M.M.', stream: 'Lecturer', image: hendrikaGaudensRefwaluPhoto },
      { name: 'Rifan Kurnia', stream: 'Lecturer', image: rifanKurniaPhoto },
      { name: 'Wafa Taftazani', stream: 'Lecturer', image: wafaTaftazaniPhoto },
      { name: 'Yevonnael Andrew', stream: 'Lecturer', image: yevonnaelAndrewPhoto },
      { name: 'Faransina Olivia Rumere, M.S.', stream: 'Lecturer', image: faransinaOliviaPhoto },
      { name: 'Fransisca Agrika Lintang Astuti, M.Si.', stream: 'Lecturer', image: fransiscaAgrikaPhoto },
      { name: 'Nathanael Waraney Gerald Massie, MCIT', stream: 'Lecturer', image: nathanaelWaraneyPhoto },
      { name: 'Alexander Tendo A., M.A.B.', stream: 'Lecturer', image: alexanderTendoPhoto },
      { name: 'Stephen Ng, M.I.M., M.I.T.R., M.I.R.', stream: 'Lecturer', image: stephenNgPhoto },
      { name: 'Adi Wijaya Gani, Ph.D.', stream: 'Lecturer', image: adiWijayaUpdatedPhoto },
      { name: 'Elysabet Purba, M.A.B.', stream: 'Lecturer', image: elysabetPurbaPhoto },
      { name: 'Herryanti Herman, M.M.', stream: 'Lecturer', image: herryantiHermanPhoto },
      { name: 'Marina Kacaribu, M.Sc.', stream: 'Lecturer', image: marinaKacaribuPhoto },
      { name: 'Poonam Sagar, M.B.A.', stream: 'Lecturer', image: poonamSagarPhoto },
      { name: 'Widianty, M.M.', stream: 'Lecturer', image: widiantyPhoto },
      { name: 'Dr. Eunice Ratna Sari', stream: 'Lecturer', image: euniceRatnaPhoto },
      { name: 'Dr. Ketut Sulistyawati', stream: 'Lecturer', image: ketutSulistyawatiPhoto },
      { name: 'Albert Darmawan, M.S.', stream: 'Lecturer', image: albertDarmawanPhoto },
      { name: 'Bern Jonathan, M.T.I.', stream: 'Lecturer', image: bernJonathanPhoto },
      { name: 'Budi Setiawan, M.M.', stream: 'Lecturer', image: budiSetiawanPhoto },
      { name: 'Irving Arnaldo Hutagalung, M.A.B.', stream: 'Lecturer', image: irvingArnaldoPhoto },
      { name: 'Jasson Harsojo, M.M.', stream: 'Lecturer', image: jassonHarsojoPhoto },
    ],
    'wire': [
      { name: 'Gian Hashemi', stream: 'Lecturer', image: gianHashemiPhoto },
      { name: 'Haruchika Setiadi Abimanyu, M.A.B.', stream: 'Lecturer', image: haruchikaSediadiPhoto },
      { name: 'Kukuh Rizal', stream: 'Lecturer', image: kukuhRizalPhoto },
      { name: 'Reza Hilmawan', stream: 'Lecturer', image: rezaHilmawanPhoto },
      { name: 'Raditya Dika', stream: 'Lecturer', image: radityaDikaPhoto },
      { name: 'Andien Aisyah', stream: 'Lecturer', image: andienAisyahPhoto },
      { name: 'Gabriel Chemin', stream: 'Lecturer', image: gabrielCheminPhoto },
    ],
  };

  const augmentedDosen = studioDosen[studio.id] !== undefined ? studioDosen[studio.id] : [
    ...(studio.dosenPembimbing ? [{ name: studio.dosenPembimbing.name, stream: 'Head of Studio', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' }] : []),
    ...studio.dosenPeminatan.map((d, i) => ({
      name: d.name,
      stream: 'Lecturer',
      image: ['https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'][i % 2]
    })),
    { name: 'Dr. Ahmad', stream: 'Visiting Lecturer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    { name: 'Prof. Dina', stream: 'Guest Lecturer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' }
  ];

  // Studio-specific alumni/magang members
  const studioAlumni = {
    'mvp': [
      {
        name: 'Raihan Saputra',
        role: 'Event & Community Intern',
        company: 'Rex Regum Qeon (RRQ)',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
        linkedin: 'https://id.linkedin.com/in/raihan-saputra-a669782a5'
      },
      {
        name: 'Naufal Ahmad Sanaya',
        role: 'Community Esports',
        company: 'EVOS Esports',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
        linkedin: 'https://www.linkedin.com/in/naufal-ahmad-47a707288/'
      },
    ],
    'mosaic': [
      { name: 'Renata Trixie Maran', role: 'Data Analyst', company: 'Maverick', linkedin: 'https://www.linkedin.com/in/renata-trixie-15a11a289/' },
      { name: 'Melanie Elisa Putri Saribunga', role: 'Data Analyst', company: 'KG Media', linkedin: 'https://www.linkedin.com/in/melanie-elisa-putri-saribunga-4a1810288/' },
      { name: 'Sekarsha Namila Putri', role: 'Data Analyst', company: 'KG Media', linkedin: 'https://www.linkedin.com/in/sekarasha-namila-putri-9011702a2/' },
      { name: 'Aulia Salsabila Cahyani', role: 'Data Analyst', company: 'KG Media', linkedin: 'https://www.linkedin.com/in/auliasalsabilacahyani/' },
      { name: 'Dzalika Kintan Larasati', role: 'Content Curation', company: 'Catchplay', linkedin: 'https://www.linkedin.com/in/dzalika-kintan-larasati-94737024b/' },
      { name: 'Kania Nadyaputri Wardhani', role: 'Content Curation', company: 'Transvision', linkedin: 'https://www.linkedin.com/in/kania-nadyaputri-wardhani/' },
      { name: 'Liora Vanessa Panggabean', role: 'Content Curation', company: 'Hanyang Univ', linkedin: 'https://www.linkedin.com/in/lioravanessa/' },
      { name: 'Siti Annisa Rania Putri', role: 'Content Curation', company: 'Lancaster Univ', linkedin: 'https://www.linkedin.com/in/siti-annisa-rania-putri-09872821a/' },
      { name: 'Bernadethe Inpresa Wangge', role: 'Business Intelligence', company: 'MAP Active', linkedin: 'https://www.linkedin.com/in/bernadethew/' },
      { name: 'Amelia', role: 'Data Storyteller', company: 'Mosaic', linkedin: '#' },
      { name: 'Josefina Louise Alexandra Kawilarang', role: 'Data Storyteller', company: 'Mosaic', linkedin: '#' },
      { name: 'Nathaniel Ebenezer Pantun', role: 'Business Intelligence', company: 'Mosaic', linkedin: '#' },
      { name: 'Salma Azzahra Rahsa Ku', role: 'Business Intelligence', company: 'Mosaic', linkedin: '#' },
      { name: 'Andhiya Putrikadita Saridiningrat', role: 'Open Market & Partnership Marketing', company: 'Catchplay+', linkedin: 'https://www.linkedin.com/in/andhiya/' },
      { name: 'Sevka Asykira Wujha', role: 'Open Market & Partnership Marketing', company: 'Catchplay+', linkedin: 'https://www.linkedin.com/in/sevka-asykira-9a9729288/' },
      { name: 'Auliya Zahra', role: 'Content Curation', company: 'Transvision', linkedin: 'https://www.linkedin.com/in/auliya20/' },
      { name: 'Nur Omega Farras N. Sulistyo', role: 'Content Curation', company: 'Coventry Univ', linkedin: 'https://www.linkedin.com/in/nur-omega-farras-nabilah-sulistyo/' },
      { name: 'Charisa Liora Pramita', role: 'Content Curation', company: 'University of Pecs', linkedin: 'https://www.linkedin.com/in/charisa-liora-pramita-8b140a24a/' },
      { name: 'Verrell Renardo Gunawan', role: 'Content Operation', company: 'Metro TV', linkedin: 'https://www.linkedin.com/in/verrell-renardo-gunawan/' },
      { name: 'Zahra Zahwana', role: 'Content Operation', company: 'Transvision', linkedin: 'https://linkedin.com/in/zahrazahwana/' },
    ],
    'vote': [
      { name: 'Hanifa Retriani', role: 'Asisten Produksi', company: 'Metro TV', linkedin: 'https://id.linkedin.com/in/hanifa-retriani/in' },
      { name: 'Sebastian Imanuel GT Hutabarat', role: 'Production Assistant', company: 'Sea Today', linkedin: 'https://id.linkedin.com/in/sebastian-imanuel-gt-hutabarat-48311028a' },
      { name: 'Indira Fatihah Utomo', role: 'Intern News Analyst', company: 'Sekretariat Presiden RI', linkedin: 'https://id.linkedin.com/in/indira-fatihah-utomo-9025932a4' },
      { name: 'Dhynara Xylya Darmasavier', role: 'Intern Content Creator', company: 'Trans 7', linkedin: 'https://id.linkedin.com/in/dhynaraxd' },
      { name: 'Sayid Taqiyuddin Al Ghifari', role: 'Intern Multiplatform Sports Journalist', company: 'Kompas.com', linkedin: 'https://id.linkedin.com/in/sayidalghifari/in' },
      { name: 'Frisca Gloria Hengkesa', role: 'Intern Production Assistant', company: 'Metro TV', linkedin: 'https://id.linkedin.com/in/frisca-gloria-hengkesa' },
    ],
    'icon': [
      { name: 'Salsabila Nathania P', role: 'Digital Marketing Intern', company: 'AKG Entertainment', linkedin: 'https://id.linkedin.com/in/salsabila-nathania-putri26?trk=people-guest_people_search-card' },
      { name: 'Fathimah Zahra Faizah', role: 'Community Officer', company: 'Yayasan Indonesia Cerdas Unggul (Endgame)', linkedin: 'https://id.linkedin.com/in/fathimah-zahra-faizah-206347243/in' },
      { name: 'Muhammad Atana Ridhoka', role: 'Digital Marketing Intern', company: 'PT Emway Globalindo', linkedin: 'https://id.linkedin.com/in/atana-ridhoka-b23702288' },
      { name: 'Ilham Maulana', role: 'Product Executive Intern', company: 'Faber-Castell International Indonesia', linkedin: 'https://id.linkedin.com/in/ilhammaulana05' },
      { name: 'Wanda Pratisara Khairu Akiela', role: 'Community Officer', company: 'Yayasan Indonesia Cerdas Unggul (Endgame)', linkedin: 'https://id.linkedin.com/in/wanda-pratisara-khairu-akiela-555197289' },
    ],
    'tobo': [
      { name: 'Farrand Farrell', role: 'Digital Marketing Intern', company: 'Emway', linkedin: 'https://id.linkedin.com/in/farrand-farrell-12717524b' },
      { name: 'Nabila Salim Sungkar', role: 'Digital Marketing Intern', company: 'Emway', linkedin: 'https://id.linkedin.com/in/nabilasalimsungkar/in' },
      { name: 'Anastacia Carolyn Daendells', role: 'Ecommerce Graphic Designer', company: 'Emway', linkedin: 'https://id.linkedin.com/in/anastaciacarolyn' },
    ],
    'orangfilm': [
      { name: 'Azova Fajrul Falah Susilo', role: 'Assistant Photographer & Content Photographer', company: 'Davy Linggar Photography, Jakarta Fashion Week', linkedin: 'https://linkedin.com/in/azovasusilo' },
      { name: 'Bening Andara Solehan', role: 'Social Media Intern', company: 'ICAD', linkedin: 'https://www.linkedin.com/in/beningandara/' },
      { name: 'Callista Sheila Adifa', role: 'Media Intern', company: 'Palari Films', linkedin: 'https://linkedin.com/in/callista-sheila-adifa-677090263?originalSubdomain=id' },
      { name: 'Danendra Sang Aria', role: 'Production Intern', company: 'Base Entertainment', linkedin: 'https://www.linkedin.com/in/danendra-sang-aria-a6150b288/' },
      { name: 'Naura Zhafirah Irawan', role: 'Production Intern / Production Assistant', company: 'Base Entertainment', linkedin: 'https://www.linkedin.com/in/naura-zhafirah-7a3b5a288/' },
    ],
    'pixelpals': [
      { name: 'Sultan Rabiul Pensong', role: 'Intern', company: 'VINDES', linkedin: 'https://www.linkedin.com/in/sultanpensong/' },
      { name: 'Ervina Fadhillah', role: 'Intern', company: 'Visinema Studios', linkedin: 'https://www.linkedin.com/in/ervina-fadhilah/' },
      { name: 'Quincy Vivia Lexiana', role: 'Intern', company: 'AKG Entertainment', linkedin: 'https://www.linkedin.com/in/quincy-vivia-lexiana-702b60288/' },
      { name: 'Ainul Mardiyah', role: 'Intern', company: 'Visinema Studios', linkedin: 'https://www.linkedin.com/in/ainul-mardiyah-257b40288/' },
      { name: 'Dewi Ahmad Ridho', role: 'Intern', company: 'Faber-Castell International Indonesia', linkedin: 'https://www.linkedin.com/in/dwiahrd/' },
      { name: 'Isabel Giovanna Jemima', role: 'Intern', company: 'EVOS', linkedin: 'https://www.linkedin.com/in/isabel-giovanna-jemima/' },
      { name: 'Hafizhan Izzuddin Iman', role: 'Intern', company: 'Nusantara United FC', linkedin: 'https://www.linkedin.com/in/hafizhan-izzuddin-iman/' },
      { name: 'Cellica Metta Xewu', role: 'Intern', company: 'MAP Group Asia', linkedin: 'https://www.linkedin.com/in/cellicamettaxewu/' },
      { name: 'Arina Manasikana Putri', role: 'Intern', company: 'GCM Media Group', linkedin: 'https://www.linkedin.com/in/arinaptr/' },
      { name: 'Zulfa Nur Aina Putri', role: 'Intern', company: 'EVOS', linkedin: 'https://www.linkedin.com/in/zulfa-nur-aina-putri/' },
      { name: 'Putu Widyaditha Larasati', role: 'Intern', company: 'Faber-Castell International Indonesia', linkedin: 'https://www.linkedin.com/in/larasdth/' },
      { name: 'Syakira Naura Husna', role: 'Intern', company: 'Visinema Studios', linkedin: 'https://www.linkedin.com/in/syakiranra/' },
      { name: 'Naila Aurelia Putri', role: 'Intern', company: 'MNC Animation', linkedin: 'https://www.linkedin.com/in/naila-aurelia-putri/' },
      { name: 'Sheyma Dalilah', role: 'Intern', company: 'Faber-Castell International Indonesia', linkedin: 'https://www.linkedin.com/in/sheyma-dalilah/' },
    ],
    'flui': [
      { name: 'Haickal Caesar Saintya', role: 'Intern Social Media & Partnership', company: 'GCM Group (JFW)', linkedin: 'https://www.linkedin.com/in/haickalcaesar/' },
      { name: 'Jessenia Hayfa Irtikha', role: 'Intern Social Media & Partnership', company: 'GCM Group (JFW)', linkedin: 'https://www.linkedin.com/in/jessenia-hayfa-irtikha/' },
      { name: 'Andi Belva Deany Nafashabila', role: 'Intern Editorial', company: 'ELLE Indonesia', linkedin: 'https://www.linkedin.com/in/andi-belva-deany-nafashabila/' },
      { name: 'Anggita Budi Pratiwi', role: 'Intern Creative Multimedia', company: 'EMTEK Group (FIMELA)', linkedin: 'https://www.linkedin.com/in/anggita-budi-pratiwi/' },
      { name: 'Riza Arya', role: 'Intern Digital Writer', company: "MRA Media (Harper's Bazaar Indonesia)", linkedin: 'https://www.linkedin.com/in/riza-arya/' },
      { name: 'Azra Sarah Putri', role: 'Intern Social Media & Retail', company: 'GCM Group (Fashionlink)', linkedin: 'https://www.linkedin.com/in/azra-sarah-putri/' },
      { name: 'Matthew De Jano', role: 'Intern Digital Writer', company: "MRA Media (Harper's Bazaar Indonesia)", linkedin: 'https://www.linkedin.com/in/matthew-de-jano/' },
      { name: 'Vanesa Novelia Nelwan', role: 'Intern Digital Writer', company: "MRA Media (Harper's Bazaar Indonesia)", linkedin: 'https://www.linkedin.com/in/vanesa-novelia-nelwan/' },
      { name: 'Muhammad Althaf Rafiansa', role: 'Intern Digital Writer', company: 'MRA Media (Cosmopolitan Indonesia)', linkedin: 'https://www.linkedin.com/in/muhammad-althaf-rafiansa/' },
      { name: 'Alya Shafa Ridhoni', role: 'Intern Graphic Designer', company: 'USS Networks (USS Her)', linkedin: 'https://www.linkedin.com/in/alya-shafa-ridhoni/' },
      { name: 'Sabrina Qintara', role: 'Intern Social Media & Stylist', company: 'USS Networks (Sonderlab)', linkedin: 'https://www.linkedin.com/in/sabrina-qintara/' },
      { name: 'Regina Arsa Yudha', role: 'Intern Editorial', company: 'ELLE Indonesia', linkedin: 'https://www.linkedin.com/in/regina-arsa-yudha/' },
      { name: 'Elisabet Chaterine', role: 'Intern Editorial', company: 'ELLE Indonesia', linkedin: 'https://www.linkedin.com/in/elisabet-chaterine/' },
      { name: 'Vanessa Luthfi Ayutya', role: 'Intern Editorial', company: 'ELLE Indonesia', linkedin: 'https://www.linkedin.com/in/vanessa-luthfi-ayutya/' },
      { name: 'Fathurrizqy Naufal Adriyandi', role: 'Intern Video Editor', company: 'ELLE Indonesia', linkedin: 'https://www.linkedin.com/in/fathurrizqy-naufal-adriyandi/' },
      { name: 'Rahma Azzahra', role: 'Intern Editorial', company: 'Clara Indonesia', linkedin: 'https://www.linkedin.com/in/rahma-azzahra/' },
      { name: 'Muhammad Faiz', role: 'Intern Editorial', company: 'Clara Indonesia', linkedin: 'https://www.linkedin.com/in/muhammad-faiz/' },
      { name: 'Amanda Vianca Hutabarat', role: 'Intern Editorial', company: 'Clara Indonesia', linkedin: 'https://www.linkedin.com/in/amanda-vianca-hutabarat/' },
      { name: 'Shafira Yulianti', role: 'Intern Creative Video', company: 'IDN Media', linkedin: 'https://www.linkedin.com/in/shafira-yulianti/' },
      { name: 'Raissa Kamila Zahra', role: 'Intern Marketing & Public Relations', company: 'Kami Idea', linkedin: 'https://www.linkedin.com/in/raissakamilazahra/' },
      { name: 'Alifiya Rumaishah Farisi', role: 'Intern Editorial', company: 'ELLE Indonesia', linkedin: 'https://www.linkedin.com/in/alifiya-rumaishah-farisi/' },
      { name: 'Alisa Sofia Rahmah', role: 'Intern Greenroom', company: 'GCM Group (Fashionlink / JFW)', linkedin: 'https://www.linkedin.com/in/alisa-sofia-rahmah/' },
      { name: 'Alivina Indi Nawaki Satjakusumah', role: 'Intern International Relations', company: 'GCM Group (JFW & DEWI Magazine)', linkedin: 'https://www.linkedin.com/in/alivina-indi-nawaki-satjakusumah/' },
      { name: 'Alyssa Dinnia Iffani', role: 'Intern Retail', company: 'GCM Group (Fashionlink)', linkedin: 'https://www.linkedin.com/in/alyssa-dinnia-iffani/' },
      { name: 'Damar Sinara', role: 'Intern Event & Activation', company: 'Plaza Indonesia', linkedin: 'https://www.linkedin.com/in/damar-sinara/' },
      { name: 'Dhia Aina Hazibi', role: 'Intern Social Media Marketing', company: 'OATSIDE', linkedin: 'https://www.linkedin.com/in/dhia-aina-hazibi/' },
      { name: 'Gabriella Victory Manurung', role: 'Intern Event & Activation', company: 'Plaza Indonesia', linkedin: 'https://www.linkedin.com/in/gabriella-victory-manurung/' },
      { name: 'Kalilla Andjani Wilson', role: 'Intern Production Officer', company: 'GCM Group (JFW & DEWI Magazine)', linkedin: 'https://www.linkedin.com/in/kalilla-andjani-wilson/' },
      { name: 'Meisya Rachmadia', role: 'Intern Digital Writer', company: 'MRA Group (CASA Indonesia)', linkedin: 'https://www.linkedin.com/in/meisya-rachmadia/' },
      { name: 'Nebrisca Elvaretta Sadi', role: 'Intern Video Editorial', company: 'ELLE Indonesia', linkedin: 'https://www.linkedin.com/in/nebrisca-elvaretta-sadi/' },
      { name: 'Ruben Bhaskara Muchlis', role: 'Intern Graphic Designer', company: 'MRA Group (CASA Indonesia)', linkedin: 'https://www.linkedin.com/in/ruben-bhaskara-muchlis/' },
      { name: 'Syavilla Ramadhani', role: 'Intern Editorial Team', company: 'ELLE Indonesia', linkedin: 'https://www.linkedin.com/in/syavilla-ramadhani/' },
      { name: 'Yasmin Meiladiva Imran', role: 'Intern Marketing Communication', company: 'Bvlgari', linkedin: 'https://www.linkedin.com/in/yasmin-meiladiva-imran/' },
    ],
    'pojokomik': [
      { name: 'Aminaraisya Chandra Dara', role: 'Intern Creative Staff', company: 'Comxnaut ID', linkedin: 'https://www.linkedin.com/in/aminaraisya-chandra-dara/' },
      { name: 'Raisha Alifa Pangestu', role: 'Graphic Designer', company: 'Kisai Entertainment', linkedin: 'https://www.linkedin.com/in/raisha-pangestu/' },
    ],
    'spice': [
      { name: 'Idris Bagus Wicaksono', role: 'UI/UX Designer', company: 'CX Insight', linkedin: 'https://www.linkedin.com/in/idris-bagus-wicaksono/' },
      { name: 'Christopher Emmanuel Dwisatrio Sandjojo', role: 'IT Intern', company: 'Bifarma Adiluhung', linkedin: 'https://www.linkedin.com/in/christophersandjojo/' },
    ],
    'oxlab': [
      { name: 'Reiky Perkasa', role: 'Game Programmer Intern', company: 'Extra Life Entertainment', linkedin: 'https://www.linkedin.com/in/reiky-perkasa-alamsyiah/' },
      { name: 'Derron Samuel Davor Sitorus', role: 'Game Programmer Intern', company: 'Extra Life Entertainment', linkedin: 'https://www.linkedin.com/in/derron-samuel-davor-sitorus-55bb58288/' },
    ],
  };

  const augmentedAlumni = studioAlumni[studio.id] || studio.alumniList.map((a, i) => ({
    ...a,
    image: [`https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop`, `https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop`, `https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop`][i % 3],
    linkedin: '#'
  }));

  // Studio-specific mitra industri
  const studioMitraIndustri = {
    'mvp': [
      { name: 'EVOS', logo: evosLogo },
      { name: 'RRQ', logo: rrqLogo },
      { name: 'Mineski Indonesia', logo: mineskiLogo },
    ],
    'mosaic': [
      { name: 'GoTo', logo: gotoLogo },
      { name: 'KG Media', logo: kgMediaLogo },
      { name: 'Catchplay', logo: catchplayLogo },
      { name: 'MAP Active', logo: mapActiveLogo },
      { name: 'Maverick', logo: maverickLogo },
      { name: 'RedDoorz', logo: reddoorzLogo },
      { name: 'TransVision', logo: transvisionLogo },
      { name: 'Viu', logo: viuLogo },
    ],
    'vote': [
      { name: 'Kompas.com', logo: kompasComLogo },
      { name: 'CNN Indonesia', logo: cnnIndonesiaLogo },
      { name: 'Kompas TV', logo: kompasTvLogo },
      { name: 'Sekretariat Presiden RI', logo: sekretariatPresLogo },
      { name: 'Metro TV', logo: metroTvLogo },
      { name: 'Sea Today', logo: seaTodayLogo },
      { name: 'Trans 7', logo: trans7Logo },
    ],
    'icon': [
      { name: 'AKG', logo: akgLogo },
      { name: 'Emco', logo: emcoLogo },
      { name: 'ENDGAME', logo: endgameLogo },
      { name: 'Faber Castell', logo: faberCastellLogo },
    ],
    'tobo': [
      { name: 'EMCO', logo: emcoToboLogo },
      { name: 'Emway', logo: emwayLogo },
    ],
    'orangfilm': [
      { name: 'Base Entertainment', logo: baseEntertainmentLogo },
      { name: 'CIAD', logo: ciadLogo },
      { name: 'Dalopez', logo: dalopezLogo },
      { name: 'Jakarta Fashion Week', logo: jfwLogo },
      { name: 'KG Media', logo: kgMediaOrangFilmLogo },
      { name: 'Kompas', logo: kompasOrangFilmLogo },
      { name: 'MD Pictures', logo: mdPicturesLogo },
      { name: 'Palari', logo: palariLogo },
      { name: 'Visinema', logo: visinemaLogo },
    ],
    'kuls': [
      { name: 'Sony Music', logo: kulsLogo1 },
      { name: 'Google Indonesia', logo: kulsLogo2 },
      { name: 'Spotify', logo: kulsLogo3 },
      { name: 'Jakarta Fashion Week', logo: kulsLogo4 },
      { name: 'Dentsu', logo: kulsLogo5 },
      { name: 'Visinema', logo: kulsLogo6 },
    ],
    'stage': [
      { name: 'JakartaMovin', logo: jakartaMovinLogo },
    ],
    'oxlab': [
      { name: 'Toge Productions', logo: togeProductionsLogo },
      { name: 'Aim to Mite', logo: aimToMiteLogo },
      { name: 'Extra Life Entertainment', logo: extraLifeLogo },
      { name: 'GameChanger Studio', logo: gameChangerLogo },
      { name: 'Asosiasi Game Indonesia', logo: agiLogo },
    ],
    'pixelpals': [
      { name: 'Visinema Studios', logo: visinemaPixelPalsLogo },
      { name: 'MNC Animation', logo: mncAnimationLogo },
      { name: 'EVOS', logo: evosPixelPalsLogo },
      { name: 'Faber Castell', logo: faberCastellPixelPalsLogo },
    ],
    'pojokomik': [
      { name: 'Kisai Entertainment', logo: kisaiEntertainmentLogo },
      { name: 'Bumi Langit', logo: bumiLangitLogo },
    ],
    'flui': [
      { name: 'ELLE Indonesia', logo: elleFluiLogo },
      { name: 'MRA Group', logo: mraGroupLogo },
      { name: 'CLARA Indonesia', logo: claraFluiLogo },
      { name: 'USS Networks', logo: ussNetworksLogo },
      { name: 'GCM Group', logo: gcmGroupLogo },
      { name: 'Multi Bintang Indonesia', logo: multiBintangLogo },
      { name: 'COSMOPOLITAN Indonesia', logo: cosmopolitanFluiLogo },
      { name: "L'Oreal Indonesia", logo: lorealLogo },
      { name: 'Jakarta Fashion Week', logo: jfwFluiLogo },
    ],
    'spice': [
      { name: 'CX Insight', logo: cxInsightLogo },
      { name: 'IBM', logo: ibmSpiceLogo },
      { name: 'The Hague University', logo: theHagueLogo },
      { name: 'Metrodata', logo: metrodataLogo },
    ],
    'wire': [
      { name: 'TuneCore', logo: tunecoreLogo },
    ],
  };

  const mitraIndustri = studioMitraIndustri[studio.id] || [
    { name: 'SCTV', logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop' },
    { name: 'Gojek', logo: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=100&h=100&fit=crop' },
    { name: 'Tokopedia', logo: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055ce?w=100&h=100&fit=crop' },
    { name: 'Shopee', logo: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=100&h=100&fit=crop' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 animate-in slide-in-from-right-8 duration-300 pb-20">
      
      {/* Banner Header */}
      <div className="w-full h-48 md:h-64 relative bg-slate-200">
        <img src={imageBanner} alt="Banner Studio" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
        <div className="absolute top-4 md:top-6 left-4 sm:left-6 z-50">
          <button 
            onClick={() => navigateTo('studios')}
            className="flex items-center text-white hover:text-blue-200 font-bold text-xs md:text-sm transition-colors group bg-black/30 hover:bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Balik ke Daftar
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-16 md:-mt-20 relative z-20">
        <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-6 md:mb-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 opacity-5 rounded-bl-full ${studio.color}`}></div>
          
          <div className={`flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-2xl md:rounded-3xl flex items-center justify-center text-white ${studio.color} shadow-xl z-10`}>
             <studio.icon className="w-10 h-10 md:w-14 md:h-14" />
          </div>
          
          <div className="z-10 w-full flex flex-col lg:flex-row gap-8 justify-between items-start">
            <div className="lg:w-2/3">
              <span className="inline-block bg-[#ebf0ff] text-[#243376] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-[13px] mb-3 md:mb-4 border border-[#cdd6ec]">
                Fokus: {studio.focus}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3 md:mb-4 tracking-tight">{studio.name}</h1>
              <p className="text-sm md:text-lg text-slate-600 leading-relaxed font-medium">{studio.overview}</p>
              
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

            {/* Stream Percentage Pie Chart */}
            <div className="lg:w-1/3 w-full bg-slate-50/80 rounded-3xl p-4 md:p-6 border border-slate-100 shadow-inner">
               <h3 className="text-sm font-bold text-slate-800 mb-4 text-center border-b border-slate-200 pb-3">Distribusi Stream Studio</h3>
               <div className="h-40 w-full mb-4">
                 <ResponsiveContainer width="100%" height="100%">
                   <PieChart>
                     <Pie
                       data={pieData}
                       cx="50%"
                       cy="50%"
                       innerRadius={45}
                       outerRadius={75}
                       paddingAngle={3}
                       dataKey="value"
                       stroke="none"
                     >
                       {pieData.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={entry.color} />
                       ))}
                     </Pie>
                     <RechartsTooltip 
                       formatter={(value) => `${value}%`} 
                       contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                     />
                   </PieChart>
                 </ResponsiveContainer>
               </div>
               <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                 {pieData.map((entry, index) => (
                   <div key={index} className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full flex-shrink-0 shadow-sm" style={{ backgroundColor: entry.color }}></div>
                     <span className="text-[11px] font-bold text-slate-600 leading-tight">{entry.name}</span>
                   </div>
                 ))}
               </div>
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
                  <button 
                    key={idx} 
                    onClick={() => setActiveModal({ type: 'stream', data: stream })}
                    className="bg-slate-50 rounded-xl md:rounded-2xl px-5 py-3.5 md:px-6 md:py-4 border border-slate-200 hover:border-[#35489e] hover:bg-blue-50/50 transition-all hover:shadow-md w-full sm:w-auto text-left group"
                  >
                    <div className="flex justify-between items-center gap-4">
                       <h3 className="font-bold text-slate-800 text-sm md:text-[15px] group-hover:text-[#35489e] transition-colors">{stream}</h3>
                       <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#35489e] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    </div>
                  </button>
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
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {studio.careerPath.map((career, idx) => (
                    <div
                      key={idx}
                      className="bg-[#ebf0ff] text-[#243376] px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-[14px] font-bold border border-[#cdd6ec]"
                    >
                      {career}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs md:text-[13px] font-bold text-slate-400 uppercase tracking-widest mb-3 md:mb-4">Bakal Diajarin Apa Aja?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {studio.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center text-slate-700 bg-slate-50 p-3 md:p-4 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                      <span className="font-bold text-xs md:text-[14px]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mitra Industri Section */}
            <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Building className="w-6 h-6 md:w-7 md:h-7 mr-3 text-[#35489e]" />
                Mitra Industri
              </h2>
              <div className="flex overflow-x-auto gap-4 pb-4 -mx-2 px-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
                 {mitraIndustri.map((mitra, idx) => (
                   <div key={idx} className="flex-shrink-0 w-36 flex flex-col items-center group">
                     <div className="w-full aspect-video bg-slate-50 rounded-2xl overflow-hidden mb-3 border border-slate-100 p-3 flex justify-center items-center group-hover:border-blue-200 group-hover:shadow-md transition-all">
                       <img src={mitra.logo} alt={mitra.name} className="w-full h-full object-contain rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
                     </div>
                     <span className="text-xs md:text-sm font-bold text-slate-700 text-center">{mitra.name}</span>
                   </div>
                 ))}
              </div>
            </div>

            {/* Updated Data Alumni Section with Scroll */}
            <div className="bg-[#35489e] rounded-[2rem] p-6 md:p-10 text-white shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full blur-2xl"></div>

              <h2 className="text-xl md:text-2xl font-bold mb-6 flex items-center relative z-10">
                <GraduationCap className="w-6 h-6 md:w-7 md:h-7 mr-3 text-blue-200" />
                Data Magang Member Studio
              </h2>

              <div className="flex overflow-x-auto gap-4 pb-4 relative z-10 -mx-2 px-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#93c5fd #3b82f6' }}>
                {augmentedAlumni.map((alumni, idx) => {
                  const initials = alumni.name.split(' ').map(n => n.charAt(0)).join('').substring(0, 2);
                  return (
                    <div key={idx} className="flex-shrink-0 w-72 md:w-80 bg-[#4a5dc2] border border-[#5d71cc] rounded-2xl p-5 flex flex-col justify-between hover:bg-[#5265cc] transition-colors group">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full bg-white/20 border-2 border-blue-200/30 shadow-sm flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{initials}</span>
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm md:text-base">{alumni.name}</p>
                          <p className="text-blue-100 text-xs md:text-[13px] font-medium leading-snug mt-1.5">{alumni.role}<br/><span className="font-bold">{alumni.company}</span></p>
                        </div>
                      </div>
                      <div className="flex justify-end pt-2 border-t border-blue-400/30 mt-auto">
                        <a href={alumni.linkedin} target="_blank" rel="noreferrer" className="flex items-center text-xs font-bold text-blue-100 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full">
                          <Linkedin className="w-3.5 h-3.5 mr-1.5" /> LinkedIn
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg md:text-xl mb-4 md:mb-6 border-b border-slate-100 pb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-[#35489e]" /> Dosen Studio
              </h3>
              
              <div className="flex flex-col gap-3 max-h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                 {augmentedDosen.map((dosen, idx) => (
                   <div key={idx} className="flex items-center gap-4 bg-slate-50 hover:bg-slate-100 p-3.5 rounded-2xl border border-slate-100 transition-colors">
                     <img src={dosen.image} alt={dosen.name} className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-sm border-2 border-white" />
                     <div>
                       <p className="font-bold text-slate-800 text-sm">{dosen.name}</p>
                       <span className="inline-block mt-1 px-2 py-0.5 bg-blue-100 text-blue-700 rounded text-[10px] font-bold uppercase tracking-wider">{dosen.stream}</span>
                     </div>
                   </div>
                 ))}
              </div>
            </div>

            {/* Kata Kating Section */}
            <div className={`rounded-[2rem] p-6 md:p-8 ${studio.color} shadow-xl`}>
              <h3 className="font-bold text-xs md:text-[13px] uppercase tracking-widest mb-4 md:mb-6 flex items-center text-white">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-2" /> Kata Kating
              </h3>
              <div className="space-y-5 md:space-y-6 max-h-[600px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#cbd5e1 #f1f5f9' }}>
                {studio.seniorInsight.map((insight, idx) => (
                  <div key={idx} className="relative bg-white p-4 md:p-5 rounded-xl shadow-sm border border-slate-50">
                    <p className="text-slate-700 font-medium leading-relaxed text-sm md:text-[15px] mb-4">
                      "{insight.text}"
                    </p>
                    <div className="flex items-center gap-2.5">
                      <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full ${studio.color} text-white flex items-center justify-center text-[10px] md:text-xs font-bold flex-shrink-0`}>
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

      {/* Reusable Modal for Stream & Career */}
      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal?.type === 'stream' ? 'Detail Stream' : 'Prospek Karir'}
      >
        {activeModal && (
          <div className="flex flex-col gap-5">
             <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
               <h4 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">{activeModal.data}</h4>
               <p className="text-slate-600 font-medium leading-relaxed text-sm md:text-base">
                 {activeModal.type === 'stream'
                   ? `Di stream ${activeModal.data}, lo bakal difokusin buat ngulik teknis dan konsep mendalam. Lulus dari sini, skill lo bakal solid banget buat ngerjain project-project gede di industri media dan kreatif.`
                   : `Sebagai ${activeModal.data}, role ini lagi banyak banget dicari sama industri kreatif dan tech. Lo bakal punya jenjang karir yang jelas, bisa eksplor banyak ide, dan ngerjain project keren!`}
               </p>
             </div>

             <button onClick={() => setActiveModal(null)} className="w-full py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
               Paham, Tutup
             </button>
          </div>
        )}
      </Modal>

    </div>
  );
};
