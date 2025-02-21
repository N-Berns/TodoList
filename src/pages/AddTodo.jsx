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
import { Label } from "@/components/ui/label";

const AddTodo = () => {
  return (
    <div>
      <div>
        <Card className="w-[750px]">
          <CardHeader>
            <CardTitle>Add To Do</CardTitle>
            <CardDescription>Fill all fields to add to do</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col  py-10 gap-y-5 w-full">
            <div className="gap-y-2">
              <Label>Title</Label>
              <Input />
            </div>
            <div className="gap-y-2">
              <Label>To do Description</Label>
              <Textarea />
            </div>
            <div className="gap-y-2">
              <Label>Date</Label>
              <Input />
            </div>
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
