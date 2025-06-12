import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Wild Series !");
});

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);


export default router;
