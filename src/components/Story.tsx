import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { marked } from "marked";
import { useTranslation } from "react-i18next";

interface IProps {
  show: boolean;
  onHide(): void;
  story: Record<string, any>;
}

function Story(props: IProps) {
  const { story } = props;
  const { t } = useTranslation();

  function renderMarkdown(content: string) {
    const renderer = new marked.Renderer();

    renderer.paragraph = function (text) {
      return `<p class="tabbed-paragraph">${text}</p>`;
    };

    const html = content
      ? marked(content.replace(/\\n/g, "\n"), {
          breaks: true,
          renderer: renderer,
        })
      : "";

    return html;
  }

  const storyBody = renderMarkdown(story.content);

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.story.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body dangerouslySetInnerHTML={{ __html: storyBody }}></Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>{t("modal.close")}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Story;
