import Dropdown from "@app/ui/components/Dropdown/Dropdown";
import Panel from "@app/ui/components/Panel/Panel";

const CharacterListControls = () => {
  return (
    <Panel>
      <Dropdown label="Sort characters by:" id="sort">
        <Dropdown.Item value="name">Name</Dropdown.Item>
        <Dropdown.Item value="gender">Gender</Dropdown.Item>
        <Dropdown.Item value="status">Status</Dropdown.Item>
      </Dropdown>
    </Panel>
  );
};

export default CharacterListControls;
