import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import TweetForComment from './TweetForComment';

interface Iprops {
    tweet: any;
    show: boolean;
    handleModelClose: any;
}

const TweetCommentModel = ({ tweet, show, handleModelClose }:Iprops) => {
	return (
		<div>
			<Modal show={show} onHide={handleModelClose} dialogClassName="mw-lg">
				<Modal.Header closeButton>
					<Modal.Title>Comment</Modal.Title>
				</Modal.Header>
				<Modal.Body>
                      <TweetForComment tweet={tweet} />
                </Modal.Body>
				<Modal.Footer className="border-0">
					<Button variant='secondary' onClick={handleModelClose}>
						Close
					</Button>
					<Button variant='dark' onClick={handleModelClose}>
						Comment
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default TweetCommentModel;
