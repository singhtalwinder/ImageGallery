import express from "express";
import query from "../database/mysqlQuery";

const router = express.Router();

router.delete("/", async (req, res) => {
	try {
		const refreshToken = req.cookies.refreshToken;
		await query(
			`DELETE FROM refreshToken WHERE refreshToken="${refreshToken}"`
		);
		res.clearCookie("authToken");
		res.clearCookie("refreshToken");
		return res.status(200).send("signout successful");
	} catch (err) {
		console.log(err);
		return res.status(500).send("Internal server error");
	}
});

export default router;
