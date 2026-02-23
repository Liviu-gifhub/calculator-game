class EventBus {
    private listeners: { [event: string]: Function[] } = {};
    private history: { [event: string]: any[] } = {};

    on(event: string, listener: Function): void {
        if (!this.listeners[event]) {
            this.listeners[event] = [];
        }
        this.listeners[event].push(listener);
    }

    once(event: string, listener: Function): void {
        const wrapper = (...args: any[]) => {
            listener(...args);
            this.off(event, wrapper);
        };
        this.on(event, wrapper);
    }

    off(event: string, listener: Function): void {
        if (!this.listeners[event]) return;
        this.listeners[event] = this.listeners[event].filter(l => l !== listener);
    }

    emit(event: string, ...args: any[]): void {
        if (this.listeners[event]) {
            this.listeners[event].forEach(listener => listener(...args));
        }
        this.history[event] = this.history[event] || [];
        this.history[event].push(args);
    }

    clear(event?: string): void {
        if (event) {
            delete this.listeners[event];
            delete this.history[event];
        } else {
            this.listeners = {};
            this.history = {};
        }
    }

    getHistory(event: string): any[] {
        return this.history[event] || [];
    }

    getListenerCount(event: string): number {
        return this.listeners[event] ? this.listeners[event].length : 0;
    }
}

export default EventBus;