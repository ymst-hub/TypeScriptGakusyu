/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import { types } from '@babel/core'
import { theme } from 'themes'
import type { ResolveProps,Responsive } from 'types'

//theme
export type AppTheme = typeof theme

type SpaceThemeKeys = keyof typeof theme.space
type ColorThemeKeys = keyof typeof theme.colors
type FontSizeThemeKeys = keyof typeof theme.fontSizes
type LetterSpacingThemeKeys = keyof typeof theme.letterSpacing
type LineHeightThemeKeys = keyof typeof theme.lineHeights

//Themekeyの型
export type Space = SpaceThemeKeys | (string & {})
export type Color = ColorThemeKeys | (string & {})
export type FontSize = FontSizeThemeKeys | (string & {})
export type LetterSpacing = LetterSpacingThemeKeys | (string & {})
export type lineHeights = LineHeightThemeKeys | (string & {})

//ブレイクポイント
const BREAKPOINTS: { [key: string]:string} = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
}

/**
 * Responsive型をCSSプロパティとその値に変換
 * @param propkey CSSプロパティ
 * @param prop Responsive型
 * @param theme AppTheme
 * @return CSSプロパティとその値
 */
export function toPropValue<T>(
    propKey: string,
    prop?: Responsive<T>,
    theme?: AppTheme,
) {
    if(prop === undefined) return undefined

    if(isResponsivePropType(prop)) {
        const result = []
        for(const responsiveKey in prop){
            if(responsiveKey === 'base'){
                //デフォルトのスタイル
                result.push(
                    `${propKey}: ${toThemeValueIfNeeded(
                        propKey,
                        prop[responsiveKey],
                        theme,
                    )};`,
                )
            }else if(
                responsiveKey === 'sm' ||
                responsiveKey === 'md' ||
                responsiveKey === 'lg' ||
                responsiveKey === 'xl'
            ){
                //メディアクエリでのスタイル
                const breakpoint = BREAKPOINTS[responsiveKey]
                const style = `${propKey}: ${toThemeValueIfNeeded(
                    propKey,
                    prop[responsiveKey],
                    theme,
                )};`
                result.push(`@media screen and (min-width: ${breakpoint}){${style}}`)
            }
        }
        return result.join('\n')
    }
    return `${propKey}: ${toThemeValueIfNeeded(propKey,prop,theme)}`
}

const SPACE_KEYS = new Set([
    'margin',
    'margn-top',
    'margin-left',
    'margin-bottom',
    'margin-right',
    'padding',
    'padding-top',
    'padding-left',
    'padding-bottom',
    'padding-right',
])
const COLOR_KEYS = new Set(['color','background-color'])
const FONT_SIZE_KEYS = new Set(['font-size'])
const LINE_SPACING_KEYS = new Set(['font-spacing'])
const LINE_HEIGHT_KEYS = new Set(['line-height'])

/**
 * Themeに指定されたCSSプロパティの値に変換
 * @param  propkey CSSプロパティ
 * @param  value CSSプロパティの値
 * @param  theme Apptheme
 * @returns CSSプロパティの値
 */
