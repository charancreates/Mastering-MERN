import router from "express";

const router = router();

router.route("/").post(createUser);

export default router;
