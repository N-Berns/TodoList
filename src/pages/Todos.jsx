import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import TodoCard from "@/components/TodoCard";

const Todos = () => {
  return (
    <div>
      <Card className="w-[750px]">
        <CardHeader>
          <CardTitle>To do's </CardTitle>
          <CardDescription>Here are the of you to do's</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-y-5 items-center">
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
            <TodoCard />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <h1>Made with ♥ by Mario Inguito</h1>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Todos;
