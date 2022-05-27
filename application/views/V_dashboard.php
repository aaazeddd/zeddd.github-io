  <?php
  $arrHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
  $hariIni = $arrHari[date('w')];
  ?>
  <body>
    <div class="box-dashboard">
      <div class="sub-box-dashboard">
        <div class="nav">
          <div class="left-button">
          <button class="btn menuMakan" title="Menu Makan"><i id="menu_makan" class="fa-solid fa-utensils"></i></i></button>
          </div>
          <div class="right-button">
            <!-- <button class="btn" onmouseover="startFade()" onmouseout="stopFade()" onclick="logout()" title="Logout"><i id="logout" class="fa-solid fa-arrow-right-from-bracket"></i></button> -->
            <button class="btn changeShift" title="Ganti Shift"><i id="ganti_shift" class="fa-solid fa-rotate"></i></button>
          </div>
        </div>
        <h2>Countdown</h2>
        <b><div id="clocktime" class="font-mono">-- : -- : --</div></b>
        <div id="clocktime2">--</div>
        <div class="info-shift">
          <?php if($shift == 'S1') {
            echo '[ Shift 1 ]';
          } elseif($shift == 'SU') {
            echo '[ Shift Umum ]';
          } elseif($shift == 'G5') {
            echo '[ Shift Tanggung 5 ]';
          } else {
            echo '[ Shift 2 ]';
          }?>
        </div>
        <hr>
        <!-- Countdown -->
        <div class="countdown mt-4">
          <div id="atas" class="atas">
            <div class="countdownItem">
              <div class="titleCountdown">Break</div>
              <hr>
              <div id="break" class="theCountdown">
                <div class="jam">
                  <div id="jamBreak" class="angka font-mono">-</div>
                  <div class="text">Jam</div>
                </div>
                <div class="pemisah">:</div>
                <div class="menit">
                  <div id="menitBreak" class="angka font-mono">-</div>
                  <div class="text">Menit</div>
                </div>
                <div class="pemisah">:</div>
                <div class="detik">
                  <div id="detikBreak" class="angka font-mono">-</div>
                  <div class="text">Detik</div>
                </div>
              </div>
            </div>
            <div class="countdownItem">
              <div class="titleCountdown">Istirahat</div>
              <hr>
              <div id="istirahat" class="theCountdown">
                <div id="jamIstirahatToRemove" class="jam">
                  <div id="jamIstirahat" class="angka font-mono">-</div>
                  <div class="text">Jam</div>
                </div>
                <div id="pemisahIstirahatToRemove" class="pemisah">:</div>
                <div class="menit">
                  <div id="menitIstirahat" class="angka font-mono">-</div>
                  <div class="text">Menit</div>
                </div>
                <div class="pemisah">:</div>
                <div class="detik">
                  <div id="detikIstirahat" class="angka font-mono">-</div>
                  <div class="text">Detik</div>
                </div>
              </div>
            </div>
            <div class="countdownItem">
              <div class="titleCountdown">Pulang</div>
              <hr>
              <div id="pulang" class="theCountdown">
                <div class="jam">
                  <div id="jamPulang" class="angka font-mono">-</div>
                  <div class="text">Jam</div>
                </div>
                <div class="pemisah">:</div>
                <div class="menit">
                  <div id="menitPulang" class="angka font-mono">-</div>
                  <div class="text">Menit</div>
                </div>
                <div class="pemisah">:</div>
                <div class="detik">
                  <div id="detikPulang" class="angka font-mono">-</div>
                  <div class="text">Detik</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Timer Waktu -->
      <div id="bgTimer"></div>
    </div>
    <script src="<?= ('assets/js/script.js') ?>"></script>
    <!-- Script for Shift 1 -->
    <?php if($shift == 'S1') { 
      if($hariIni == "Jum'at") { ?>
        <script src="<?= ('assets/js/S1/scriptS1-Jum.js') ?>"></script> 
      <?php } else if ($hariIni == "Sabtu") { ?>
        <script src="<?= ('assets/js/S1/scriptS1-Sab.js') ?>"></script>
      <?php } else { ?>
        <script src="<?= ('assets/js/S1/scriptS1-SenKam.js') ?>"></script>
      <?php } ?>
    <!-- Script for Shift Umum -->
    <?php } elseif($shift == 'SU') {
      if($hariIni == "Jum'at") { ?>
        <script src="<?= ('assets/js/SU/scriptSU-Jum.js') ?>"></script>
      <?php } else if ($hariIni == "Sabtu") { ?>
        <script src="<?= ('assets/js/SU/scriptSU-Sab.js') ?>"></script>
      <?php } else { ?>
        <script src="<?= ('assets/js/SU/scriptSU-SenKam.js') ?>"></script>
      <?php } ?>
    <!-- Script for Shift Tanggung 5 -->
    <?php } elseif($shift == 'G5') {
      if($hariIni == "Jum'at") { ?>
        <script src="<?= ('assets/js/G5/scriptG5-Jum.js') ?>"></script>
      <?php } else if ($hariIni == "Sabtu") { ?>
        <script src="<?= ('assets/js/G5/scriptG5-Sab.js') ?>"></script>
      <?php } else { ?>
        <script src="<?= ('assets/js/G5/scriptG5-SenKam.js') ?>"></script>
      <?php } ?>
    <!-- Script for Shift 2 -->
    <?php } else {
      if($hariIni == "Jum'at") { ?>
        <script src="<?= ('assets/js/S2/scriptS2-Jum.js') ?>"></script>
      <?php } else if ($hariIni == "Sabtu") { ?>
        <script src="<?= ('assets/js/S2/scriptS2-Sab.js') ?>"></script>
      <?php } else { ?>
        <script src="<?= ('assets/js/S2/scriptS2-SenKam.js') ?>"></script>
      <?php } ?>
    <?php } ?>
  </body>
</html>