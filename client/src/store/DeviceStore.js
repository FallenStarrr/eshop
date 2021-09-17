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
      {id: 1, name: 'iphone 12 pro', price: 25000, rating: 5, img: "../assets/iphone12.jpg"},

      {id: 2, name: 'iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone12.jpg'},
      
      {id: 3, name: 'iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone12.jpg'},

      {id: 4, name: 'iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone12.png'},
      {id: 4, name: 'iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone12.jpg'},
      {id: 4, name: 'iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone12.jpg'},
      {id: 4, name: 'iphone 12 pro', price: 25000, rating: 5, img: '../assets/iphone12.jpg'},
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