import React from 'react'
import Context from './context'
import ListWrapper from './ListWrapper'
import styled from 'styled-components'

import useSizeElement from './helper/useSizeElement'
import useSliding from './helper/useSliding'

import ListButton from './ListButton'

import { Item } from './Item'


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

                    <Container 
                        ref={containerRef} 
                        {...slideProps}
                    >
                        {children}
                    </Container>

                </List>

                {hasPrev && <ListButton onClick={handlePrev} type="prev" />}
                {hasNext && <ListButton onClick={handleNext} type="next" />}

            </ListWrapper>

        </Context.Provider>
    )
}

const Container = styled.div`
    display: flex;
    padding: 0 55px;
    transition: transform 300ms ease 100ms;
    z-index: 3;
    width: 100%;
`

const List = styled.div`

    display: flex;
    position: relative;

    ${Item}:hover {
        transform: scale(1.5) !important;
    }

    &:hover ${Item} {
        transform: translateX(-25%);
    }

    ${Item}:hover ~ ${Item} {
        transform: translateX(25%);
    }
`