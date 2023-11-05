const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
    res.render("index", {
        title: "한국접근성평가연구원",
    });
}); // 랜딩 페이지

router.get("/intro", async (req, res, next) => {
    res.render("intro", {
        title: "한국접근성평가연구원",
    });
}); // 연구원소개
router.get("/org", async (req, res, next) => {
    res.render("org", {
        title: "한국접근성평가연구원",
    });
}); // 조직도 안내
router.get("/center", async (req, res, next) => {
    res.render("center", {
        title: "한국접근성평가연구원",
    });
}); // 조직도 안내
router.get("/appliances", async (req, res, next) => {
    res.render("appliances", {
        title: "한국접근성평가연구원",
    });
}); // 접근성시험평가 안내
router.get("/kiosk", async (req, res, next) => {
    res.render("kiosk", {
        title: "한국접근성평가연구원",
    });
}); // 접근성시험평가 안내
router.get("/login", async (req, res, next) => {
    res.render("login", {
        title: "한국접근성평가연구원",
    });
}); // 로그인
router.get("/join", async (req, res, next) => {
    res.render("join", {
        title: "한국접근성평가연구원",
    });
}); // sign up
router.get("/notice", async (req, res, next) => {
    res.render("notice", {
        title: "한국접근성평가연구원",
    });
}); // sign up
router.get("/contact", async (req, res, next) => {
    res.render("contact", {
        title: "한국접근성평가연구원",
    });
}); // sign up




module.exports = router;
