// Type definitions for @testing-library/user-event
declare module '@testing-library/user-event' {
  export interface UserEvent {
    click(element: Element): Promise<void>;
    dblClick(element: Element): Promise<void>;
    type(element: Element, text: string, options?: any): Promise<void>;
    clear(element: Element): Promise<void>;
    tab(options?: { shift?: boolean }): Promise<void>;
    hover(element: Element): Promise<void>;
    unhover(element: Element): Promise<void>;
    upload(element: Element, file: File | File[]): Promise<void>;
    selectOptions(element: Element, values: string | string[]): Promise<void>;
    deselectOptions(element: Element, values: string | string[]): Promise<void>;
    keyboard(text: string): Promise<void>;
    pointer(actions: any): Promise<void>;
    setup(options?: any): UserEvent;
  }

  const userEvent: UserEvent & {
    setup: (options?: any) => UserEvent;
  };

  export default userEvent;
}