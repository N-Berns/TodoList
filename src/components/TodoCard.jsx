import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const TodoCard = () => {
  return (
    <div>
      <Card className="w-[750px]">
        <CardHeader>
          <CardTitle>Mag Gmall</CardTitle>
        </CardHeader>
        <CardContent>Mag shopping sa Gmall</CardContent>
        <CardFooter className="flex justify-between">
          <h1>February 12, 2025</h1>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TodoCard;
