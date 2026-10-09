import Image from 'next/image'
import { SITE_CONFIG } from '@/lib/config/site'

/**
 * Oturum başına bir kez gösterilen logo açılışı (~2 sn).
 *
 * Tamamen CSS ile çalışır; görünürlüğü perdenin hemen ardından gelen küçük
 * betik (`INTRO_SCRIPT`) perde öğesine `data-show` ekleyerek açar. Durum
 * <html> üzerinde tutulmaz: React 19 hydration sırasında <html>/<body>
 * niteliklerini sıfırladığı için oradaki bir sınıf anında silinirdi.
 *  - İçerik perdenin arkasında ilk boyamada hazırdır (LCP gecikmez).
 *  - JS çalıştırmayan botlar / tarayıcılar perdeyi hiç görmez.
 *  - Hareket azaltma tercihi olan kullanıcılarda perde gösterilmez.
 *  - Tıklama veya Escape ile anında atlanır.
 */
const INTRO_SCRIPT = `(function(){var el=document.getElementById('intro');if(!el)return;try{if(matchMedia('(prefers-reduced-motion: reduce)').matches||sessionStorage.getItem('bh-intro'))return;sessionStorage.setItem('bh-intro','1');el.setAttribute('data-show','');var end=function(){el.removeAttribute('data-show')};setTimeout(end,2300);el.addEventListener('click',end);document.addEventListener('keydown',function(e){if(e.key==='Escape')end()})}catch(e){}})();`

export function IntroCurtain() {
  return (
    <>
      <div id="intro" className="intro" aria-hidden="true">
        <div className="flex flex-col items-center">
          {/* Dekoratif: gerçek logo navbar'da erişilebilir adla zaten mevcut */}
          <Image
            src="/images/logo-text-cropped.png"
            alt=""
            width={766}
            height={407}
            sizes="208px"
            loading="lazy"
            className="intro-logo"
          />
          <span className="intro-thread" />
          <span className="intro-caption">Bursa · {SITE_CONFIG.founded}</span>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
    </>
  )
}
