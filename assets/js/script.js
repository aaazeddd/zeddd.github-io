$(document).ready(function() {
  // Animasi tombol menu makan
  $(".menuMakan").hover(function() {
    // Hover On
    var btnMenuMakan = $("#menu_makan")
    btnMenuMakan.addClass("fa-shake")
    btnMenuMakan.css({
      "--fa-animation-duration" : ".7s",
      "--fa-animation-iteration-count" : ".5"
    })
  }, function() {
    // Hover Off
    var btnMenuMakan = $("#menu_makan")
    btnMenuMakan.removeClass("fa-shake")
    btnMenuMakan.removeAttr("style")
  })
  // Fungsi tombol menu makan
  $(".menuMakan").click(function() {
    $.confirm({
      title: 'Menu Makan',
      content: 'url:http://192.168.168.18/Countdown2/assets/menu_makan.php',
      theme: 'modern',
      type: 'orange',
      icon: 'fa fa-utensils',
      draggable: false,
      animation: 'top',
      closeAnimation: 'top',
      animateFromElement: false,
      onContentReady: function () {
          var self = this
          console.log(self)
          this.setContentPrepend('<div></div>')
      },
      columnClass: 'large',
    })
  })
  // Animasi tombol ganti shift
  $(".changeShift").hover(function() {
    // Hover On
    var btnGantiShift = $("#ganti_shift")
    btnGantiShift.addClass("fa-spin")
    btnGantiShift.css({
      "--fa-animation-duration" : ".7s",
      "--fa-animation-iteration-count" : ".5"
    })
  }, function() {
    // Hover Off
    var btnGantiShift = $("#ganti_shift")
    btnGantiShift.removeClass("fa-spin")
    btnGantiShift.removeAttr("style")
  })
  // Fungsi tombol ganti shift
  $(".changeShift").click(function() {
    $.confirm({
      title: 'Warning!',
      content: 'Apakah Anda yakin ingin ganti shift?',
      theme: 'modern',
      type: 'orange',
      icon: 'fa fa-warning',
      draggable: false,
      animation: 'top',
      closeAnimation: 'top',
      animateFromElement: false,
      autoClose: 'Tidak|7000',
      buttons: {
        Yakin: {
          btnClass: 'btn-orange',
          action: function() {
            window.location.replace('http://192.168.168.18/Countdown2/C_Index/logout')
          }
        },
        Tidak: {},
      }
    })
  })
})

$(document).ready(function() {
  // Animasi tombol menu makan
  $(".menuMakanTimer").hover(function() {
    // Hover On
    var btnMenuMakan = $("#menu_makan_timer")
    btnMenuMakan.addClass("fa-shake")
    btnMenuMakan.css({
      "--fa-animation-duration" : ".7s",
      "--fa-animation-iteration-count" : ".5"
    })
  }, function() {
    // Hover Off
    var btnMenuMakan = $("#menu_makan_timer")
    btnMenuMakan.removeClass("fa-shake")
    btnMenuMakan.removeAttr("style")
  })
  // Fungsi tombol menu makan
  $(".menuMakanTimer").click(function() {
    $.confirm({
      title: 'Menu Makan',
      content: 'url:http://192.168.168.18/Countdown2/assets/menu_makan.php',
      theme: 'modern',
      type: 'orange',
      icon: 'fa fa-utensils',
      draggable: false,
      animation: 'top',
      closeAnimation: 'top',
      animateFromElement: false,
      onContentReady: function () {
          var self = this
          console.log(self)
          this.setContentPrepend('<div></div>')
      },
      columnClass: 'large',
    })
  })
  // Animasi tombol ganti shift
  $(".changeShiftTimer").hover(function() {
    // Hover On
    var btnGantiShift = $("#ganti_shift_timer")
    btnGantiShift.addClass("fa-spin")
    btnGantiShift.css({
      "--fa-animation-duration" : ".7s",
      "--fa-animation-iteration-count" : ".5"
    })
  }, function() {
    // Hover Off
    var btnGantiShift = $("#ganti_shift_timer")
    btnGantiShift.removeClass("fa-spin")
    btnGantiShift.removeAttr("style")
  })
  // Fungsi tombol ganti shift
  $(".changeShiftTimer").click(function() {
    $.confirm({
      title: 'Warning!',
      content: 'Apakah Anda yakin ingin ganti shift?',
      theme: 'modern',
      type: 'orange',
      icon: 'fa fa-warning',
      draggable: false,
      animation: 'top',
      closeAnimation: 'top',
      animateFromElement: false,
      autoClose: 'Tidak|7000',
      buttons: {
        Yakin: {
          btnClass: 'btn-orange',
          action: function() {
            window.location.replace('http://192.168.168.18/Countdown2/C_Index/logout')
          }
        },
        Tidak: {},
      }
    })
  })
})