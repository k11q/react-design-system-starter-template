import * as Select from '@radix-ui/react-select';

export default () => (
  <Select.Root>
    <Select.Trigger>
      <Select.Value />
      <Select.Icon />
    </Select.Trigger>

    <Select.Portal>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>
        <Select.Item value="beef">Beef</Select.Item>

          <Select.Group>
            <Select.Label />
            <Select.Item value="beef">Beef</Select.Item>
          </Select.Group>

          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);