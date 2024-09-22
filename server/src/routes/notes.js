import { Router } from "express";

export const notesRoute = Router();

notesRoute.get("/notes", async (_, res) => {
  res.status(200).send([
    { id: "someidxyz", title: "untitled 101", note: "xyz note details" },
    { id: "xyzidofsx", title: "untitled", note: "new note" },
  ]);
});

notesRoute.get("/notes/:id", async (req, res) => {
  const noteID = req.params.id;
  res
    .status(200)
    .json({ id: noteID, title: "untitled 101", note: "xyz note details" });
});
