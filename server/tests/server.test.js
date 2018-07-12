const expect = require('expect')
const request = require('supertest')
const {ObjectID} = require('mongodb')
const _ = require('lodash')

const {app} = require('./../server')
const {Todo} = require('./../models/todo')

const todos = [{
    _id: new ObjectID(),
    text: 'first test to do'
    },{ 
        _id: new ObjectID(),
        text: 'second test to do',
        completed: true,
        completedAt: 333
}]

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos)
    }).then (() => done())

})

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        let text = 'Test todo tets'

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text)
            })
            .end((err, res) => {
                if(err){
                    return done(err)
                }
                
                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1)
                    expect(todos[0].text).toBe(text)
                    done()
                }).catch((e) => done(e))
            })

    })

    it('should not create todo with invalid data', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if(err){
                return done(err)
            }
            Todo.find().then((todos) => {
                expect(todos.length).toBe(2)
                done()
            }).catch((e) => done(e))
        })
    })
})

describe('GET .todos', () => {
    it('should get all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .expect((res) => {
            expect(res.body.todos.length).toBe(2)
        })
        .end(done)
    })
})

describe('GET /todos/:id', () => {
    it('should return todo doc', (done) => {
        request(app)
        .get(`/todos/${todos[0]._id.toHexString()}`)
        .expect(200)
        .expect((res) => {
            expect(res.body.todo.text).toBe(todos[0].text)
        })
        .end(done)
    })

    it('Should return 404 if todo not found', (done) => {
        let hexID = new ObjectID().toHexString()

        request(app)
        .get(`/todos/${hexID}`)
        .expect(404)
        .end(done)
    })

    it ('shoud return 400 for no object uds', (done) => {

        request(app)
        .get(`/todos/123abc`)
        .expect(400)
        .end(done)
    })
})

// describe('DELETE /todos/:id', () => {
//     it('should remove a todo', (done) => {
//         let hexId = todos[1]._id.toHexString()
        
//         request(app)
//         .delete(`/todos/${hexId}`)
//         .expect(200)
//         .expect((res) => {
//             expect(res.body.todo._id).toBe(hexId)
//         })
//         .end((err, res) => {
//             if(err){
//                 return done(err)
//             }
//             //query database us toNotExist
//             //expect(null).toNotExist()
//             Todo.findById(hexId).then((todo) => {
//                 expect(todo).toNotExist()
//                 done()
//             }).catch((e) => done(e))
//         })
//     })

//     it('Should return 404 if todo not found', (done) => {
//         let hexID = new ObjectID().toHexString()

//         request(app)
//         .delete(`/todos/${hexID}`)
//         .expect(404)
//         .end(done)
//     })

//     it ('shoud return 400 for no object uds', (done) => {

//         request(app)
//         .delete(`/todos/123abc`)
//         .expect(404)
//         .end(done)
//     })
// })

describe('PATCH /todos/:id', () => {
    it('should update the todo', (done) => {
        const id = todos[1]._id.toHexString()
        const updatedTodo = {
          text: 'something from test case',
          completed: true
        }
        
        request(app)
          .patch(`/todos/${id}`)
          .send(updatedTodo)
          .expect(200)
          .expect(res => {
            expect(res.body.todo.text).toEqual(updatedTodo.text)
            expect(res.body.todo.completed).toBeTruthy()
            expect(typeof res.body.todo.completedAt).toBe('number')
        })
        .end(done)
       })

    it('should be update the completed at when tudo is not completed', (done) => {
        const id = todos[1]._id.toHexString()
        const updatedTodo = {
          text: 'something from test case!!',
          completed: false
        }
        
        request(app)
          .patch(`/todos/${id}`)
          .send(updatedTodo)
          .expect(200)
          .expect(res => {
            expect(res.body.todo.text).toBe(updatedTodo.text)
            expect(res.body.todo.completed).toBeFalsy()
            expect(res.body.todo.completedAt).toBeGreaterThan(0)
        })
        .end(done)
    })
})