import { Typography, Card, CardContent } from "@mui/material";
import React from "react";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  return (
    <Card>
        <CardContent>
            <Typography className="infoBox__title" color="textSecondary">
                {title}
            </Typography>
            <h2 className="infoBox__cases">{cases}</h2>

            <Typography className="infoBox__total" color="textSecondary">
                {total} Total
            </Typography>
        </CardContent>
    </Card>
  )
}

export default InfoBox;