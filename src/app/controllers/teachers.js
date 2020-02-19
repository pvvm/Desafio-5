const { age, graduation, date } = require("../../lib/utils")
const Teacher = require('../models/Teacher.js')

module.exports = {
    index(req, res) {
        const { filter } = req.query

        if(filter) {
            Teacher.findBy(filter, function(teachers) {
                return res.render("teachers/index", { teachers, filter })
            })
        } else  {
            Teacher.all(function(teachers) {
                return res.render("teachers/index", {teachers})
            })
        }
    },
    show(req, res) {
        Teacher.find(req.params.id, function(teacher) {
            if(!teacher) return res.send("Teacher not found!")

            teacher.age = age(teacher.birth)
            teacher.scholarity = graduation(teacher.scholarity)
            teacher.areas = teacher.areas.split(",")

            teacher.created_at = date(teacher.created_at).format

            return res.render("teachers/show", { teacher })
        })
    },
    create(req, res) {
        return res.render("teachers/create")
    },
    post(req, res) {
        const keys = Object.keys(req.body)
        for(key of keys) {
            if(req.body[key] == "")
                return res.send("Please fill all fields")
        }

        Teacher.create(req.body, function(teacher) {
            return res.redirect(`/teachers/${teacher.id}`)
        })

    },
    edit(req, res) {
        Teacher.find(req.params.id, function(teacher) {
            if(!teacher) return res.send("Teacher not found!")

            teacher.birth = date(teacher.birth).iso

            return res.render("teachers/edit", { teacher })
        })
    },
    put(req, res) {
        const keys = Object.keys(req.body)
        for(key of keys) {
            if(req.body[key] == "")
                return res.send("Please fill all fields")
        }

        Teacher.update(req.body, function() {
            return res.redirect(`/teachers/${req.body.id}`)
        })
    },
    delete(req, res) {
        Teacher.delete(req.body.id, function() {
            return res.redirect("/teachers")
        })
    },
}