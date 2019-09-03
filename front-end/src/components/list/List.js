import React from 'react'
import Context from './context'
import ListWrapper from './ListWrapper'
import styled from 'styled-components'

import useSizeElement from './helper/useSizeElement'
import useSliding from './helper/useSliding'

import ListButton from './ListButton'


export default ({ children }) => 
{
    const { width, elementRef } = useSizeElement()
    const {
        handlePrev,
        handleNext,
        slideProps,
        containerRef,
        hasNext,
        hasPrev
    } = useSliding(width, React.Children.count(children))

    const contextValue = { elementRef }

    return (
        <Context.Provider value={contextValue}>

            <ListWrapper>

                <List>

                    <div 
                        className="container" 
                        ref={containerRef} 
                        {...slideProps}
                    >
                        {children}
                    </div>

                </List>

                {hasPrev && <ListButton onClick={handlePrev} type="prev" />}
                {hasNext && <ListButton onClick={handleNext} type="next" />}

            </ListWrapper>

        </Context.Provider>
    )
}


const List = styled.div`

    display: flex;
    position: relative;

    .container {
        display: flex;
        padding: 0 55px;
        transition: transform 300ms ease 100ms;
        z-index: 3;
        width: 100%;
    }

    .item {
        background-color: rgba(0,0,0,0.8); 
        border-radius: 4px;
        z-index: 4;
        flex: 0 0 13%;
        text-align: center;
        margin: 0 2px;
        transition: transform 300ms ease 100ms;
        text-decoration: none;
    }

    .item:hover {
        transform: scale(1.5) !important;
    }

    &:hover .item {
        transform: translateX(-25%);
    }

    .item:hover ~ .item {
        transform: translateX(25%);
    }
`