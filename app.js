const couting = () => {
    const dateTujuan = new Date('May 13, 2021 00:00:00').getTime()
    const now = new Date().getTime();
    const gap = dateTujuan - now;
    // console.log(Math.floor(gap%24))

    // mix waktu
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    //calculate day
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    // console.log(textSecond);

    document.querySelector('.timee').innerText = textDay;
    document.querySelector('.hourr').innerText = textHour;
    document.querySelector('.minutee').innerText = textMinute;
    document.querySelector('.secondd').innerText = textSecond;
    
    if(gap < 1000) {
      document.querySelector('.date').innerText = "Harta yang paling bernilai adalah kesabaran. Rekan yang paling setia adalah amal. Ibadah yang paling indah adalah keikhlasan. Identitas tertinggi adalah iman. Pekerjaan paling berat adalah memaafkan. Mohon maaf lahir batin, selamat Hari Raya Idulfitri.";
    }
}

setInterval(couting, 1000);
