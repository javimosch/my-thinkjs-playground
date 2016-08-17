'use strict';

import Base from './base.js';

export default class extends Base {

  init(http) {
    super.init(http);
  }

  __before() {
    //console.log('before url',JSON.stringify(Object.keys(this.http)));
    //console.log('url',this.http.url);
    //console.log('action',this.http.action);
  }
  __call() {
    //11console.log('url',this.url);
  }
  __after() {
    //console.log('__after');
  }

  /**
   * index action
   * @return {Promise} []
   */
  indexAction(self) {
    //auto render template file index_index.html
    return self.display();
  }
  helloAction() {
    self.assign({
      name: self.get('name')
    })
    return self.display()
  }

  async deleteAction(self){
      if(!self.post()._id) self.redirect('/user/list')
      let data = await self.model("user").where({
        _id:self.post()._id
      }).delete()
      self.redirect('/user/list')
  }

  async listAction(self) {
    self.assign('data', {});
    if (self.isGet()) {
      let data = await self.model("user").where({}).select()
      console.log('DATA',data)
      self.assign('data', data)
      return self.display();
    }
  }

  async editAction(self) {
    self.assign('data', {});
    self.assign('action', self.http.url);
    self.assign('affectedRows', 0)

    let model = self.model("user")
    let _idObj = {
      _id: self.param('_id')
    }

    if (self.isGet()) {
      let data = await model.where(_idObj).find()
      self.assign('data', data)
      return self.display();
    }

    if (self.isPost()) {
      var data = Object.assign(self.post(), _idObj)
      self.assign('data', data);
      let affectedRows = await model.where(_idObj).update(data);
      self.assign('affectedRows', affectedRows)
      return self.display();
    }

  }

  async createAction(self) {
    self.assign('data', {});
    self.assign('action', '/user/create');

    if (self.isGet()) return self.display()
    let model = self.model("user")
    let _id = await model.add(self.post())

    self.redirect('/user/edit/' + _id)
  }

}