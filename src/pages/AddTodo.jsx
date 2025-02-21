import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


const AddTodo = () => {
  return (
    <div>
      <div>
        <Card className="w-[750px]">
          <CardHeader>
            <CardTitle>Add To Do</CardTitle>
            <CardDescription>Fill all fields to add to do</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center py-10">
            
          </CardContent>
          <CardFooter className="flex justify-between">
            <h1>Made with ♥ by Mario Inguito</h1>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AddTodo;
