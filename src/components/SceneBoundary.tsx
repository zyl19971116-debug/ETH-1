"use client";

import { Component, type ReactNode } from 'react';

export default class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    if (this.state.failed) return <div aria-hidden="true" className="h-full w-full bg-[radial-gradient(ellipse_at_center,_#182018_0%,_#000_70%)]" />;
    return this.props.children;
  }
}
