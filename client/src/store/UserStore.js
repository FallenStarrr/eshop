import {makeAutoObservable} from 'mobx'

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }

  setUser(bool) {
    this._isAuth = bool
  }


  get isAuth() {
    return this._Auth
  }

  get user() {
    return this._user
  }
}