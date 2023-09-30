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
}); // 랜딩 페이지
router.get("/org", async (req, res, next) => {
    res.render("org", {
        title: "한국접근성평가연구원",
    });
}); // 랜딩 페이지

module.exports = router;
