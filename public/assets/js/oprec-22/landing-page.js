let rect = $('.head__img')[0].getBoundingClientRect();
let mouse = { x: 0, y: 0, moved: false };

$("body").mousemove(e => {
    if($(window).width() > 500) {
        mouse.moved = true;
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    }
});

// Ticker event will be called on every frame
TweenLite.ticker.addEventListener('tick', () => {
    if (mouse.moved) {
        parallaxIt(".head__x", -20);
        parallaxIt(".head__slide", -20);
    }
    mouse.moved = false;
});

function parallaxIt(target, movement) {
    TweenMax.to(target, 0.5, {
        x: (mouse.x - rect.width / 2) / rect.width * movement,
        y: (mouse.y - rect.height / 2) / rect.height * movement
    });
}

$(window).on('resize scroll', () => {
    rect = $('.head__img')[0].getBoundingClientRect();
})

// TAB TUPOKSI
text = $('.tupoksi__text div')[0];
seratext = "Bidang Sera merupakan bidang yang bertanggung jawab untuk mewadahi dan memfasilitasi minat dan bakat warga S1 Sistem Informasi UNAIR dibidang non akademik khususnya dalam seni dan olahraga. <br /><br /> Jobdesc:<br /> 1. Memfasilitasi warga S1 Sistem Informasi UNAIR dalam mengembangkan minat dan bakatnya dibidang non akademik melalui Agenda latihan rutin. Bidang Sera juga bertugas mengadakan acara peringatan ulang tahun HIMSI.<br /> 2. Bidang Sera juga bertugas mengirim delegasi untuk mengikuti kompetisi di bidang seni dan olah raga.<br />";
akademiktext = "Bidang akademik merupakan bidang yang bekerja dalam lingkup peningkatan kualitas akademik dan pendampingan dalam pengembangan prestasi mahasiswa S1 Sistem Informasi UNAIR. <br /><br /> Jobdesc :<br /> <i>Divisi  Pengembangan Prestasi</i><br /> 1. Mendata pencapaian prestasi mahasiswa S1 Sistem Informasi UNAIR.<br /> 2. Menentukan mahasiswa S1 Sistem Informasi UNAIR yang paling berprestasi untuk diajukan menjadi delegasi Mawapres.<br /> 3. Memberikan informasi dan bimbingan seputar PKM kepada mahasiswa baru mahasiswa S1 Sistem Informasi UNAIR.<br /> 4. Memberikan apresiasi kepada mahasiswa S1 Sistem Informasi UNAIR yang dinilai paling berprestasi.<br /> 5. Pengadaan kompetisi untuk siswa SMA/sederajat untuk memperkenalan prodi S1 Sistem Informasi UNAIR.<br /> 6. Memberikan informasi seputar perlombaan yang berkaitan dengan prodi S1 Sistem Informasi UNAIR.<br /> 7. Memberikan pendampingan bagi mahasiswa S1 Sistem Informasi UNAIR yang mengikuti lomba.<br /><br /> <i>Divisi  Dukungan Akademik </i><br /> 1. Mengumpulkan materi dan soal dari setiap mata kuliah untuk kemudian dimasukkan ke google drive HIMSI.<br /> 2. Membantu mahasiswa S1 Sistem Informasi UNAIR dalam mencari referensi untuk mata kuliah tertentu.<br /> 3. Menyediakan contoh PKM dan skripsi dari mahasiswa S1 Sistem Informasi UNAIR.<br /> 4. Menyediakan pentutor bimbingan pembelajaran untuk mata kuliah tertentu menjelang ujian bagi 2 angkatan termuda mahasiswa S1 Sistem Informasi UNAIR.";
psdmtext = "Bidang PSDM merupakan bidang yang bertanggung jawab sebagai ujung tombak dalam hal koordinasi, optimalisasi dan pengawalan dalam rangka sumber daya mahasiswa S1 Sistem Informasi UNAIR. <br /><br /> Jobdesc:<br /> <i>Divisi Kader</i><br /> 1. Menentukan nilai-nilai yang ingin diterapkan untuk keperluan kaderisasi.<br /> 2. Melaksanakan program kerja yang berkaitan dengan kaderisasi beserta rangkaiannya.<br /><br /> <i>Divisi Personalia</i><br /> 1. Menyediakan wadah bagi warga S1 Sistem Informasi untuk menyampaikan aspirasi maupun mencurahkan isi hatinya secara personal.<br /> 2. Menyediakan wadah untuk warga HIMSI melakukan interaksi dan komunikasi untuk menjaga hubungan baik per bidang maupun antar bidang.<br /> 3. Memberikan apresiasi kepada staff HIMSI yang sedang merayakan momen atau pencapaian tertentu.<br />";
ristektext = "Bidang Ristek adalah bidang yang memiliki peran untuk membantu, memfasilitasi, dan memotivasi warga S1 Sistem Informasi UNAIR terhadap segala hal yang berkaitan dengan keprofesian dan teknologi. <br /><br /> Jobdesc : <br /> 1. Memfasilitasi mahasiswa S1 Sistem Informasi UNAIR dalam pengembangan minat dan bakat di dunia teknologi. <br /> 2. Menciptakan lingkungan yang mendukung bagi mahasiswa S1 Sistem Informasi UNAIR dalam pengembangan keahlian keprofesian. <br /> 3. Menyediakan wadah bagi mahasiswa S1 Sistem Informasi UNAIR dalam memperoleh informasi seputar pengalaman keprofesian. <br /> 4. Melakukan pendataan dan pemetaan minat dan bakat mahasiswa S1 Sistem Informasi UNAIR untuk mendukung pelaksanaan poin 1, 2, dan 3.";
kestaritext = "Bidang KESTARI merupakan bidang yang bertanggung jawab atas kegiatan kewirausahaan dalam menambah pemasukan kas HIMSI serta pengelolaan sarana dan prasarana di kesekretariatan HIMSI UNAIR. <br /><br /> Jobdesc:<br /> <i>Divisi Kewirausahaan</i><br /> 1. Mengatur produksi dan penjualan JAHIM (Jaket himpunan) bagi mahasiswa S1 Sistem Informasi.<br /> 2. Mengelola penjualan MERSI (Merchandise SI) bagi mahasiswa S1 Sistem Informasi.<br /> 3. Memberikan informasi seputar kegiatan kewirausahaan.<br /><br /> <i>Divisi Inventaris</i><br /> 1. Memfasilitasi peminjaman zoom untuk kegiatan warga S1 Sistem Informasi, s&k berlaku.<br /> 2. Melakukan manajemen pengelolaan dan pemeliharaan barang yang berada di kesekretariatan HIMSI.<br /> 3. Memberikan informasi seputar peminjaman fasilitas di kesekretariatan HIMSI.";
mediatext = "Bidang Media merupakan bidang yang bertanggung jawab atas pembuatan desain grafis,video, dan semua editing serta pengelolaan media sosial HIMSI UNAIR sebagai sarana informasi untuk warga S1 Sistem Informasi UNAIR dan pihak eksternal.<br /><br /> Jobdesc:<br /> 1. Mengelola Official Account HIMSI meliputi Instagram, Line@, Youtube dan Email.<br /> 2. Membuat dan menyajikan informasi berupa desain grafis ataupun video melalui media sosial.<br /> 3. Menjadi pusat penyebaran informasi yang valid terkait dengan kegiatan yang dilakukan HIMSI UNAIR.";
hublutext = "Bidang HUBLU merupakan bidang yang memiliki ranah kerja eksternal dan bertanggung jawab sebagai penghubung HIMSI UNAIR dengan eksternal HIMSI UNAIR. <br /><br /> Jobdesc:<br /> Menghubungkan dan menjalin kerjasama HIMSI UNAIR dengan eksternal HIMSI UNAIR, diantaranya alumni, mahasiswa diluar S1 Sistem Informasi UNAIR, dan masyarakat umum demi tercipta dan terjaganya hubungan yang baik dan harmonis sehingga dapat bertukar informasi, ilmu, dan pengetahuan.";

text.innerHTML = ristektext;

for (let index = 0; index < $('.tupoksi__btn').length; index++) {
    const element = $('.tupoksi__btn')[index];
    element.addEventListener("click", function () {
        reset();
        element.classList.add('active');
        // console.log(element.id);
        switch (element.id) {
            case "sera":
                text.innerHTML = seratext;
                break;
            case "akademik":
                text.innerHTML = akademiktext;
                break;
            case "psdm":
                text.innerHTML = psdmtext;
                break;
            case "ristek":
                text.innerHTML = ristektext;
                break;
            case "kestari":
                text.innerHTML = kestaritext;
                break;
            case "media":
                text.innerHTML = mediatext;
                break;
            case "hublu":
                text.innerHTML = hublutext;
                break;
            default:
                text.innerHTML = "RISTEK";
        }
    })
}

function reset() {
    for (let index = 0; index < $('.tupoksi__btn').length; index++) {
        const element = $('.tupoksi__btn')[index];
        element.classList.remove('active');
    }
}

// MODALSSS
function modals(btn, modalId) {
    btn.on('click', function() {
        modalId.addClass('modal__open');
      }); 
      $(".modal__close, .modal__overlay").click(function(){
        modalId.removeClass('modal__open');
      });
}

modals($(".head__btn"), $("#modal-regis"));

// BACK TO TOP
$('.back-to-top__btn').on('click', function(e) {
    $("html, body").animate({scrollTop: 0}, 500);
});