const Todo = require('./todo')

//o que será habilitado
Todo.methods(['get', 'post', 'put','delete'])

//retorna o registro atualizado, e quando atualizar realizar as validações(por padão não é)
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo