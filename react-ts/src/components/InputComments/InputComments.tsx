import React, { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, TextField } from "@muiDep/index.ts";
import { addNewComment } from "@/service";

const InputComments = () => {
    const { postId } = useParams()
    const [commentText, setCommentText] = useState("");

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!commentText) {
            return;
        }

        try {
            await addNewComment(postId, { text: commentText });
            setCommentText("");
        } catch (error) {
            console.error("Error adding comment:", error);
        }
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentText(event.target.value);
    };

    return (
        <>
            <Box
                sx={{
                    maxWidth: '100%',
                    m: 2
                }}
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Comment"
                        id="comment"
                        name="comment"
                        value={commentText}
                        onChange={handleCommentChange}
                    />
                    <Button type="submit" sx={{ m: 1, border: 1 }}>
                        Submit
                    </Button>
                </form>
            </Box>
        </>
    );
};

export default InputComments;
