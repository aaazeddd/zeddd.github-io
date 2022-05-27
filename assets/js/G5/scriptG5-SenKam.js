function update() {
    // Waktu yang menunjukkan saat ini
    var today   = new Date();
    arrBulan    = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    arrHari     = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]
    var dateString = 
           ("0" + today.getHours()).slice(-2) + " : " +
           ("0" + today.getMinutes()).slice(-2) + " : " +
           ("0" + today.getSeconds()).slice(-2)
    var hari    = today.getDay()
    var tanggal = today.getDate()
    var bulan   = today.getMonth()
    var tahun   = today.getFullYear()

    $("#clocktime").html(dateString)
    $("#clocktime2").html(arrHari[hari] + ", " + tanggal + " " + arrBulan[bulan] + " " + tahun);

    // Jadwal Shift 1 (Senin - Kamis)
    var now                 = new Date().getTime()
    var masuk               = new Date().setHours(12, 15, 0, 0)
    var mulaiBreak          = new Date().setHours(16, 0, 0, 0)
    var selesaiBreak        = new Date().setHours(16, 15, 0, 0)
    var mulaiIstirahat      = new Date().setHours(18, 0, 0, 0)
    var selesaiIstirahat    = new Date().setHours(18, 45, 0, 0)
    var pulang              = new Date().setHours(20, 15, 0, 0)

    if (now < masuk) {
        var menitMasuk = Math.floor(((masuk - now) % (1000 * 60 * 60)) / (1000 * 60))
        var detikMasuk = Math.floor(((masuk - now) % (1000 * 60)) / (1000))

        document.getElementById("bgTimer").classList.add("bgTimer")
        document.getElementById("bgTimer").innerHTML = `
        <div class="timer">
          <div id="titleTimer" class="titleTimer">--</div>
          <hr>
          <div class="timer-flex">
            <div class="menit">
              <div id="menitTimer" class="menitTimer font-mono">--</div>
              <div class="textTimer">Menit</div>
            </div>
            <div class="pemisahTimer">:</div>
            <div class="detik">
              <div id="detikTimer" class="detikTimer font-mono">--</div>
              <div class="textTimer">Detik</div>
            </div>
          </div>
        </div>
        `
        document.getElementById("titleTimer").innerHTML = "Belum Masuk"
        document.getElementById("menitTimer").innerHTML = menitMasuk
        document.getElementById("detikTimer").innerHTML = detikMasuk
    } else if (masuk            < now && now < mulaiBreak) {
        // Countdown Break
        var jamBreak        = Math.floor(((mulaiBreak - now) % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))
        var menitBreak      = Math.floor(((mulaiBreak - now) % (1000 * 60 * 60)) / (1000 * 60))
        var detikBreak      = Math.floor(((mulaiBreak - now) % (1000 * 60)) / (1000))

        // Countdown Istirahat
        var jamIstirahat    = Math.floor(((mulaiIstirahat - now) % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))
        var menitIstirahat  = Math.floor(((mulaiIstirahat - now) % (1000 * 60 * 60)) / (1000 * 60))
        var detikIstirahat  = Math.floor(((mulaiIstirahat - now) % (1000 * 60)) / (1000))

        // Countdown Pulang
        var jamPulang       = Math.floor(((pulang - now) % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))
        var menitPulang     = Math.floor(((pulang - now) % (1000 * 60 * 60)) / (1000 * 60))
        var detikPulang     = Math.floor(((pulang - now) % (1000 * 60)) / (1000))

        document.getElementById("bgTimer").classList.remove("bgTimer")
        document.getElementById("bgTimer").innerHTML = ''

        // Set the countdown Break
        document.getElementById("jamBreak").innerHTML       = jamBreak
        document.getElementById("menitBreak").innerHTML     = menitBreak
        document.getElementById("detikBreak").innerHTML     = detikBreak
        
        // Set the countdown Istirahat
        document.getElementById("jamIstirahat").innerHTML   = jamIstirahat
        document.getElementById("menitIstirahat").innerHTML = menitIstirahat
        document.getElementById("detikIstirahat").innerHTML = detikIstirahat

        // Set the countdown Pulang
        document.getElementById("jamPulang").innerHTML      = jamPulang
        document.getElementById("menitPulang").innerHTML    = menitPulang
        document.getElementById("detikPulang").innerHTML    = detikPulang
    } else if (mulaiBreak       < now && now < selesaiBreak) {
        var menitSedangBreak = Math.floor(((selesaiBreak - now) % (1000 * 60 * 60)) / (1000 * 60))
        var detikSedangBreak = Math.floor(((selesaiBreak - now) % (1000 * 60)) / (1000))

        document.getElementById("bgTimer").classList.add("bgTimer")
        document.getElementById("bgTimer").innerHTML = `
        <div class="timer">
          <div id="titleTimer" class="titleTimer">--</div>
          <hr>
          <div class="timer-flex">
            <div class="menit">
              <div id="menitTimer" class="menitTimer font-mono">--</div>
              <div class="textTimer">Menit</div>
            </div>
            <div class="pemisahTimer">:</div>
            <div class="detik">
              <div id="detikTimer" class="detikTimer font-mono">--</div>
              <div class="textTimer">Detik</div>
            </div>
          </div>
        </div>
        `
        document.getElementById("titleTimer").innerHTML = "Break"
        document.getElementById("menitTimer").innerHTML = menitSedangBreak
        document.getElementById("detikTimer").innerHTML = detikSedangBreak
    } else if (selesaiBreak     < now && now < mulaiIstirahat) {
        // Countdown Istirahat
        var jamIstirahat    = Math.floor(((mulaiIstirahat - now) % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))
        var menitIstirahat  = Math.floor(((mulaiIstirahat - now) % (1000 * 60 * 60)) / (1000 * 60))
        var detikIstirahat  = Math.floor(((mulaiIstirahat - now) % (1000 * 60)) / (1000))

        // Countdown Pulang
        var jamPulang       = Math.floor(((pulang - now) % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))
        var menitPulang     = Math.floor(((pulang - now) % (1000 * 60 * 60)) / (1000 * 60))
        var detikPulang     = Math.floor(((pulang - now) % (1000 * 60)) / (1000))

        document.getElementById("bgTimer").classList.remove("bgTimer")
        document.getElementById("bgTimer").innerHTML = ''

        var elementBreakTime        = document.getElementById("break")
        elementBreakTime.innerHTML  = '<i class="fa-solid fa-circle-check fa-3x"></i>'
        
        // Set the countdown Istirahat
        document.getElementById("jamIstirahat").innerHTML   = jamIstirahat
        document.getElementById("menitIstirahat").innerHTML = menitIstirahat
        document.getElementById("detikIstirahat").innerHTML = detikIstirahat

        // Set the countdown Pulang
        document.getElementById("jamPulang").innerHTML      = jamPulang
        document.getElementById("menitPulang").innerHTML    = menitPulang
        document.getElementById("detikPulang").innerHTML    = detikPulang
    } else if (mulaiIstirahat   < now && now < selesaiIstirahat) {
        var menitSedangIstirahat = Math.floor(((selesaiIstirahat - now) % (1000 * 60 * 60)) / (1000 * 60))
        var detikSedangIstirahat = Math.floor(((selesaiIstirahat - now) % (1000 * 60)) / (1000))

        document.getElementById("bgTimer").classList.add("bgTimer")
        document.getElementById("bgTimer").innerHTML = `
        <div class="timer">
          <div id="titleTimer" class="titleTimer">--</div>
          <hr>
          <div class="timer-flex">
            <div class="menit">
              <div id="menitTimer" class="menitTimer font-mono">--</div>
              <div class="textTimer">Menit</div>
            </div>
            <div class="pemisahTimer">:</div>
            <div class="detik">
              <div id="detikTimer" class="detikTimer font-mono">--</div>
              <div class="textTimer">Detik</div>
            </div>
          </div>
        </div>
        `
        document.getElementById("titleTimer").innerHTML = "Istirahat"
        document.getElementById("menitTimer").innerHTML = menitSedangIstirahat
        document.getElementById("detikTimer").innerHTML = detikSedangIstirahat
    } else if (selesaiIstirahat < now && now < pulang) {
        // Countdown Pulang
        var jamPulang       = Math.floor(((pulang - now) % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))
        var menitPulang     = Math.floor(((pulang - now) % (1000 * 60 * 60)) / (1000 * 60))
        var detikPulang     = Math.floor(((pulang - now) % (1000 * 60)) / (1000))

        document.getElementById("bgTimer").classList.remove("bgTimer")
        document.getElementById("bgTimer").innerHTML = ''

        var elementBreak        = document.getElementById("break")
        elementBreak.innerHTML  = '<i class="fa-solid fa-circle-check fa-3x"></i>'

        var elementIstirahat        = document.getElementById("istirahat")
        elementIstirahat.innerHTML  = '<i class="fa-solid fa-circle-check fa-3x"></i>'

        // Set the countdown Pulang
        document.getElementById("jamPulang").innerHTML      = jamPulang
        document.getElementById("menitPulang").innerHTML    = menitPulang
        document.getElementById("detikPulang").innerHTML    = detikPulang
    } else {
        var elementBreak        = document.getElementById("break")
        elementBreak.innerHTML  = '<i class="fa-solid fa-circle-check fa-3x"></i>'

        var elementIstirahat        = document.getElementById("istirahat")
        elementIstirahat.innerHTML  = '<i class="fa-solid fa-circle-check fa-3x"></i>'

        var elementPulang        = document.getElementById("pulang")
        elementPulang.innerHTML  = '<i class="fa-solid fa-circle-check fa-3x"></i>'
    }
}

setInterval(update, 100)