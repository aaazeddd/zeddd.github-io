  <body>
    <div class="box" id="login">
      <div class="sub-box">
        <h2 class="title">Countdown</h2>
        <form action="<?= base_url('C_index/login') ?>" method="post">
          <select name="shift" class="form-select">
            <option disabled selected hidden>- Pilih Shift -</option>
            <option value="S1">Shift 1</option>
            <option value="SU">Shift Umum</option>
            <option value="G5">Shift Tanggung 5</option>
            <option value="S2">Shift 2</option>
          </select>
          <br>
          <button type="submit" id="btnSubmit">Submit</button>
        </form>
      </div>
    </div>
  </body>
</html>