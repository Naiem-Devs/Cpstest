// Mobile Menu

const mobileMenuBtn = document.querySelector('.mobile')
const mobileMenuDiv = document.querySelector('.mobile_menu')

if(mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuDiv.classList.toggle('show_menu')
    mobileMenuBtn.classList.toggle('close')
  })
}








const menuBtn = document.querySelectorAll('.menu li a')
const timeBtn = document.querySelectorAll('.time li a')
const clickGrp = document.querySelectorAll('.click_grp a')
const Jitter = document.querySelector('.Jitter')
const Kohi = document.querySelector('.Kohi')
const clickBox = document.querySelector('.click_box_wrp')

// Menu Active
menuBtn.forEach(clickBtn => {
  clickBtn.addEventListener('click', () => {
    removeCls()
    clickBtn.classList.add('active')
  })
});

function removeCls() {
  menuBtn.forEach(clickBtn => {
    clickBtn.classList.remove('active')
  })
}


// Click test Btn Change
clickGrp.forEach(clickGrpBtn => {
  clickGrpBtn.addEventListener('click', () => {
    clickGrpCls()
    clickGrpBtn.classList.add('active')
  })
});

function clickGrpCls() {
  clickGrp.forEach(clickGrpBtn => {
    clickGrpBtn.classList.remove('active')
  })
}

if (Jitter) {
  Jitter.addEventListener('click', () => {
    clickBox.classList.remove('KohiShow')
    clickBox.classList.add('JitterShow')
  })
}

if(Kohi){
  Kohi.addEventListener('click', () => {
    clickBox.classList.remove('JitterShow')
    clickBox.classList.add('KohiShow')
  })
}







// Time Sec
timeBtn.forEach(timeBtns => {
  timeBtns.addEventListener('click', () => {
    timeremovw()
    timeBtns.classList.add('active')
  })
});

function timeremovw() {
  timeBtn.forEach(timeBtns => {
    timeBtns.classList.remove('active')
  })
}




// Modal=========

let modal;
document.addEventListener("click", (e) => {
  if (e.target.className === "modal-open") {
    modal = document.getElementById(e.target.dataset.id);
    openModal(modal);
  } else if (e.target.className === "modal-close") {
    closeModal(modal);
  } else {
    return;
  }
});

const openModal = (modal) => {
  document.body.style.overflow = "hidden";
  modal.setAttribute("open", "true");
  document.addEventListener("keydown", escClose);
  let overlay = document.createElement("div");
  overlay.id = "modal-overlay";
  document.body.appendChild(overlay);
};

const closeModal = (modal) => {
  document.body.style.overflow = "auto";
  modal.removeAttribute("open");
  document.removeEventListener("keydown", escClose);
  document.body.removeChild(document.getElementById("modal-overlay"));
};

const escClose = (e) => {
  if (e.keyCode == 27) {
    closeModal();
  }
};



// Dropdown========

const dropdown = document.querySelector('.dropdown')
const dropDBtn = document.querySelector('.select-data')
const dropdownList = document.querySelectorAll('.select li')


if(dropDBtn){
  dropDBtn.addEventListener('click', () => {
    dropdown.classList.add('ShowList')
  })
}


  dropdownList.forEach(dropdownLi => {
    dropdownLi.addEventListener('click', () => {
        dropDBtn.textContent = dropdownLi.textContent
        removeMark()
        dropdownLi.classList.add('mark')
        dropdown.classList.remove('ShowList')

    })
  });

  function removeMark() {
    dropdownList.forEach(dropdownLi => {
        dropdownLi.classList.remove('mark')
    })
  }


  // ThameChange

  const themeBtn = document.querySelector('.theme')
  const themeBtni = document.querySelector('#thm-icon')
  const body = document.querySelector('body')

if(themeBtn){
  themeBtn.addEventListener('click', () => {
    body.classList.toggle('change')
  })
}

if(themeBtni){
  themeBtni.addEventListener('click', () => {
    body.classList.toggle('change')
  })
}
