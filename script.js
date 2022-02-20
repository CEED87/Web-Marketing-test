const button = document.querySelectorAll('.dropdown')

button.forEach((el) => {
  el.addEventListener('click', (e) => {
    el.lastElementChild.classList.toggle("show")
  })
})


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// Filter

const arrow = document.querySelectorAll('.line');
const btn = document.querySelector('[type="button"]');
const checkbox = document.querySelectorAll('.checkbox');
const carCard = document.querySelectorAll('.listing');
const radio = document.querySelector('[type="radio"]:checked')


// console.log(price)

const visible = () => {
  if (radio.nextElementSibling.textContent === 'All') {
    carCard.forEach(card => {
      card.classList.add('visible')
    })
  }
}

visible()

const filter = (arrPar) => {
  if (arrPar.length != 0) {
    arrPar.forEach(inst => {
      for (const key in inst) {
        carCard.forEach(id => {
          if (inst.id === id.id) {
            id.classList.add('visible')
            document.querySelector('.empty').classList.remove('visible')
          }
        })
      }
    })
  } else {
    carCard.forEach(id => {
      id.classList.remove('visible')
      document.querySelector('.empty').classList.add('visible')
    })
  }
}

const radioSort = (arr) => {

  const radio = document.querySelector('[type="radio"]:checked')
  const stateName = radio.nextElementSibling.textContent;
  const price = document.querySelector('[name="serch"]').value;
  let newArrParameters = [];

  arr.map(obj => {
    for (const key in obj) {
      if (stateName.toLowerCase() === obj.condition) {
        return newArrParameters.push(obj)
      }
    }
  })

  arr = newArrParameters

  const year = document.querySelector('.text_form');

  if (year.firstElementChild.value != '' || year.lastElementChild.value != '') {
    yearSort(arr, year);
  } else {
    filter(arr)
  }
  
}

const yearSort = (arrObj, arrInp) => {

  const price = document.querySelector('[name="serch"]').value;

  let newArr = [];
  const fromTo = [];

  for (let i = 0; i < arrInp.children.length; i++) {
    fromTo.push(Number(arrInp.children[i].value))
  }

  arrObj.forEach(obj => {
    for (const key in obj) {

      if (fromTo[0] <= Number(obj.year) && Number(obj.year) <= fromTo[1]) {
        return newArr.push(obj);
      }
   }
  })

  
  arrObj = newArr;
  if (price != '') {
    sortPrice(arrObj, price)
  } else {
    filter(arrObj)
  }
 
  
  
 }


 const sortPrice = (arrObj, arrInp) => {

  let newArr = [];

  arrObj.forEach(obj => {
    for (const key in obj) {

      if (Number(arrInp) >= Number(obj.price)) {
        return newArr.push(obj);
      }
   }
  })

  arrObj = newArr;
  filter(arrObj)

 }

const arrayTrucks = [{
    id: '1',
    condition: "used",
    own: "dealer",
    price: '25900',
    year: '2014',
    mileage: '486647 km',
    configuration: '6x2'
  },
  {
    id: '2',
    condition: "new",
    own: "dealer",
    price: '29900',
    year: '2016',
    mileage: '554317 km',
    configuration: '6x2'
  },
  {
    id: '3',
    condition: "used",
    own: "private",
    price: '7950',
    year: '2006',
    mileage: '1026087 km',
    configuration: '4x4'
  },
  {
    id: '4',
    condition: "used",
    own: "private",
    price: '25950',
    year: '2014',
    mileage: '537307 km',
    configuration: '4x2'
  },
  {
    id: '5',
    condition: "used",
    own: "private",
    price: '19500',
    year: '2009',
    mileage: '1142998 km',
    configuration: '4x2'
  },
  {
    id: '6',
    condition: "used",
    own: "private",
    price: '18750',
    year: '2012',
    mileage: '897000 km',
    configuration: '6x2'
  }
];


arrow.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.target.nextElementSibling.classList.toggle('deployed')
  })
})


btn.addEventListener('click', () => {

  const radio = document.querySelector('[type="radio"]:checked')
  

  let arrFilter = []
  let arrParameters = [];
  const stateName = radio.nextElementSibling.textContent;

  checkbox.forEach(check => {
    if (check.checked) {
      arrFilter.push(check.nextElementSibling.textContent)
    }
  })

  arrayTrucks.forEach(obj => {

    for (const key in obj) {
      arrFilter.forEach(el => {
        if (el.toLowerCase() === obj[key]) {
          arrParameters.push(obj)
        }
      })

      if (stateName === 'New' || stateName === 'Used') {
        radioSort(arrParameters)
      } else if (stateName === 'All' && arrFilter.length === 0) {
        visible()
      } else {
        filter(arrParameters)
      }
    }

  })

  

})