import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { marked } from "marked";

interface IProps {
  show: boolean;
  onHide(): void;
  story: any;
}

function Story(props: IProps) {
  const { story } = props;
  const storyBody = story.content
    ? marked(story.content.replace(/\\n/g, "\n"), { breaks: true })
    : "";

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.story.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body dangerouslySetInnerHTML={{ __html: storyBody }}></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Story;
