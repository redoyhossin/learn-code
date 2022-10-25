import { Button, Tooltip } from 'flowbite-react';
import React from 'react';

const Blog = () => {
    return (
        <div>
            
            <Tooltip
                content="Tooltip content"
                placement="top"
            >
                <Button>
                    Tooltip top
                </Button>
            </Tooltip>


        </div>
    );
};

export default Blog;