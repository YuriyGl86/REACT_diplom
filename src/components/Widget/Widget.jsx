import React from 'react';

export function Widget({ title, sectionClasses, children }) {
    return (
        <>
            <section className={sectionClasses}>
                <h2 className="text-center">{title}</h2>
                {children}
            </section>
        </>
    );
}
