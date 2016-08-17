export default [
  ["user/hello/:name", "user/index/hello"],
  ["user/create", {
    get: 'user/index/create',
    post: "user/index/create"
  }],
  ["user/edit/:_id", {
    get: 'user/index/edit',
    post: 'user/index/edit'
  }],
  ["user/list", {
    get: 'user/index/list'
  }],

  ["user", {
    delete: 'user/index/delete'
  }],

  ["user/delete", {
    post: 'user/index/delete'
  }]
];