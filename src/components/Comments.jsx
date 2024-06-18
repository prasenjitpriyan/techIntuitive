"use client";

import { Alert, Button, Modal, Textarea } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const [currentUser, setCurrentUser] = useState(true);

  return (
    <div className="max-w-7xl mx-auto w-full">
      {currentUser ? (
        <div
          key={currentUser}
          className="flex items-center gap-1 my-5 text-myColors-500 text-sm"
        >
          <p>Signed in as:</p>
          <Image
            className="h-5 w-5 object-cover rounded-full"
            src="/blog.png"
            alt=""
            width={1000}
            height={1000}
          />
          <Link
            href={"/dashboard?tab=profile"}
            className="text-xs text-myColors-600 hover:underline"
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-myColors-500 my-5 flex gap-1">
          You must be signed in href commit.
          <Link className="text-myColors-500 hover:underline" href={"/sign-in"}>
            Sign in
          </Link>
        </div>
      )}
      {currentUser && (
        <form className=" w-full border border-myColors-500 rounded-md p-3">
          <Textarea placeholder="Add a comment..." rows="3" maxLength="200" />
          <div className="flex justify-between items-center mt-5">
            <p className="text-myColors-500 text-xs">characters remaining</p>
            <Button outline gradientDuoTone="purpleToBlue" type="submit">
              Submit
            </Button>
          </div>
          <h1>Comment error</h1>
        </form>
      )}

      <div>
        <div className="text-sm my-5 flex items-center gap-1">
          <p>Comments</p>
          <div className="border border-myColors-400 py-1 px-2 rounded-sm">
            <p>1</p>
          </div>
        </div>
        <p>Hello</p>
      </div>

      <Modal onClose={() => setShowModal(false)} popup size="md">
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-myColors-400 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-myColors-500">
              Are you sure you want href delete this post?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure">Yes, I&apos;m sure</Button>
              <Button color="myColors">No, cancel</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Comments;
