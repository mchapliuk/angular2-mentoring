const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

    router.get('/courses', (req, res, next) => {
        console.log('#########################')
        let url_parts = url.parse(req.originalUrl, true),
            query = url_parts.query,
            from = query.start || 0,
            to = +query.start + +query.count,
            sort = query.sort,
            queryStr = query.query,
            courses = server.db.getState().courses;

        console.log(courses);
        console.log(url_parts);

        if (courses.length < to) {
            to = courses.length;
        }
        courses = courses.slice(from, to);

        return res.status(200).json(courses);
    });

    router.get('/courses/search', (req, res, next) => {
        let url_parts = url.parse(req.originalUrl, true),
            query = url_parts.query,
            courses = server.db.getState().courses;

        let result = [];
        if (query.searchName.trim()) {
            result = courses.filter(course => course.name.toLowerCase().includes(query.searchName.trim().toLowerCase()));
        } else {
            result = courses;
        }

        return res.status(200).json(result);
    });

    // router.delete('/courses/:id', (req, res, next) => {
    //     let url_parts = url.parse(req.originalUrl, true),
    //         query = url_parts.query,
    //         from = query.start || 0,
    //         to = +query.start + +query.count,
    //         sort = query.sort,
    //         queryStr = query.query,
    //         courses = server.db.getState().courses;
    // })

    return router;
};
