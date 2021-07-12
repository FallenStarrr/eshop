import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
  constructor() {
   
    this._types = [
      {id: 1, name: 'Холодильник'},
      {id: 2, name: 'Смартфоны'},
      {id: 3, name: 'Ноутбуки'},
      {id: 4, name: 'Телевизоры'}
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
      {id: 3, name: 'Lenovo'},
      {id: 4, name: 'Asus'},
    ]

    this._devices = [
      {id: 1, name: 'iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/search?q=img+12+pro&sxsrf=ALeKk01PqQxIrswOy1Dl7YYfU_5GD57c7Q:1626020795275&tbm=isch&source=iu&ictx=1&fir=CT74TG6t5P56IM%252CZNAGGnDnPdEu_M%252C_&vet=1&usg=AI4_-kSAPxu5XmCc9z-GJdw3pKQ7gcLoSA&sa=X&ved=2ahUKEwjt3Ji_t9vxAhWitYsKHZTlBJkQ9QF6BAgQEAE#imgrc=CT74TG6t5P56IM'},

      {id: 2, name: 'iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/search?q=img+12+pro&sxsrf=ALeKk01PqQxIrswOy1Dl7YYfU_5GD57c7Q:1626020795275&tbm=isch&source=iu&ictx=1&fir=CT74TG6t5P56IM%252CZNAGGnDnPdEu_M%252C_&vet=1&usg=AI4_-kSAPxu5XmCc9z-GJdw3pKQ7gcLoSA&sa=X&ved=2ahUKEwjt3Ji_t9vxAhWitYsKHZTlBJkQ9QF6BAgQEAE#imgrc=CT74TG6t5P56IM'},
      
      {id: 3, name: 'iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/search?q=img+12+pro&sxsrf=ALeKk01PqQxIrswOy1Dl7YYfU_5GD57c7Q:1626020795275&tbm=isch&source=iu&ictx=1&fir=CT74TG6t5P56IM%252CZNAGGnDnPdEu_M%252C_&vet=1&usg=AI4_-kSAPxu5XmCc9z-GJdw3pKQ7gcLoSA&sa=X&ved=2ahUKEwjt3Ji_t9vxAhWitYsKHZTlBJkQ9QF6BAgQEAE#imgrc=CT74TG6t5P56IM'},

      {id: 4, name: 'iphone 12 pro', price: 25000, rating: 5, img: 'https://www.google.com/search?q=img+12+pro&sxsrf=ALeKk01PqQxIrswOy1Dl7YYfU_5GD57c7Q:1626020795275&tbm=isch&source=iu&ictx=1&fir=CT74TG6t5P56IM%252CZNAGGnDnPdEu_M%252C_&vet=1&usg=AI4_-kSAPxu5XmCc9z-GJdw3pKQ7gcLoSA&sa=X&ved=2ahUKEwjt3Ji_t9vxAhWitYsKHZTlBJkQ9QF6BAgQEAE#imgrc=CT74TG6t5P56IM'},
    ]

    this._selectedType = {}
    this._selectedBrand = {}
   
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrand(brand) {
    this._brands = brand
  }

  setDevice(device) {
    this._devices = device
  }

  setSelectedType(type) {
      this._selectedType = type
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand
}


  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }
}