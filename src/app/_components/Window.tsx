'use client'

import { ArrowExpand01Icon, ArrowExpandIcon, ArrowShrinkIcon, Cancel01Icon, Remove01Icon } from 'hugeicons-react';
import { Card, CardBody, CardHeader, IconButton, Typography } from '@material-tailwind/react';
import { ElementType, useEffect, useState } from 'react';

import Draggable from 'react-draggable';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function Window({
  isShow,
  isMaximizable,
  isMinimizable,
  minimizeType = 'bottom',
  title,
  icon,
  width,
  height,
  onClose,
  children,
}: Readonly<{
  isShow: boolean;
  isMaximizable?: boolean;
  isMinimizable?: boolean;
  title: string;
  icon?: ElementType | undefined | null;
  width?: number | undefined | null;
  height?: number | undefined | null;
  children: React.ReactNode;
} & ({
  minimizeType: 'hide';
  onClose: (isHide?: boolean) => void;
} | {
  minimizeType?: 'bottom';
  onClose?: (isHide?: boolean) => void;
})>) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: width || 600, height: height || 500 });
  const [isMinimized, setMinimized] = useState(false);
  const [isMaximized, setMaximized] = useState(false);

  const Icon = icon;

  useEffect(() => {
    setMinimized(false);
    setMaximized(false);
  }, []);

  useEffect(() => {
    function onResize() {
      if (!isMaximizable || !isMaximized) {
        return;
      }
      sizeMaximum();
    }

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('reisze', onResize);
    };
  }, [isMaximizable, isMaximized]);

  useEffect(() => {
    sizeInit(width, height);
  }, [width, height]);

  function sizeInit(width?: number | undefined | null, height?: number | undefined | null) {
    const size = { width: width || 600, height: height || 500 };
    const x = Math.floor(Math.max(0, window.innerWidth - size.width) / 2);
    const y = Math.floor(Math.max(0, window.innerHeight - size.height) / 2);
    if (x === 0) size.width = window.innerWidth;
    if (y === 0) size.height = window.innerHeight;
    setPos({ x, y });
    setSize(size);
  }

  function sizeMaximum() {
    const size = { width: 800, height: window.innerHeight - 50 };
    const x = Math.floor(Math.max(0, window.innerWidth - size.width) / 2);
    const y = x === 0 ? 0 : 25;
    if (x === 0) size.width = window.innerWidth;
    if (y === 0) size.height = window.innerHeight;
    setPos({ x, y });
    setSize({
      width: size.width,
      height: size.height,
    });
  }

  function onMinimize() {
    if (!isMinimizable) {
      return;
    }
    if (minimizeType === 'hide') {
      onClose?.(true);
      return;
    }
    if (!isMinimized) {
      setPos({ x: window.innerWidth - 200, y: window.innerHeight - 32 });
      setSize({ width: 200, height: 32 });
    } else if (isMaximized) {
      sizeMaximum();
    } else {
      sizeInit(width, height);
    }
    setMinimized(!isMinimized);
  }

  function onMaximize() {
    if (!isMaximizable) {
      return;
    }
    if (isMaximized) {
      sizeInit(width, height);
    } else {
      sizeMaximum();
    }
    setMaximized(!isMaximized);
  }

  return (
    <motion.div
      animate={isShow ? 'open' : 'closed'}
      variants={{
        open: { opacity: 1, scale: 1 },
        closed: { opacity: 0, scale: 0 },
      }}
      className={clsx(
        'window-area fixed top-0 left-0 right-0 bottom-0 ' +
        'w-full h-full opacity-0 scale-0 z-50 pointer-events-none',
      )}
    >
      <Draggable
        handle=".caption"
        bounds=".window-area"
        defaultPosition={{ x: pos.x, y: pos.y }}
        position={pos}
        onDrag={(_, data) => !isMinimized && setPos(data)}
      >
        <Card
          className="rounded-[3px] border-[1px] border-gray-300
            transition-all ease-in-out shadow-2xl pointer-events-auto"
          style={{
            width: size.width + 'px',
            height: size.height + 'px',
          }}
        >
          <CardHeader
            floated={false}
            shadow={false}
            variant="filled"
            className="flex flex-row justify-between m-0 p-1 px-2 min-h-8
              rounded-t-[3px] rounded-b-none border-b-[1px] border-gray-300 text-blue-gray-800 bg-white"
          >
            <div className="caption flex flex-row flex-1 gap-1 items-center w-full select-none">
              {Icon && <Icon size="12" />}
              <Typography
                variant="h6"
                className="my-0.5 font-bold text-sm"
              >
                {title}
              </Typography>
            </div>
            <div className="flex flex-row gap-1 items-center">
              {isMinimizable && (
                <IconButton
                  variant="text"
                  size="sm"
                  color="gray"
                  className="p-0 max-w-6 max-h-6 rounded-sm"
                  onClick={onMinimize}
                >
                  {isMinimized ? (
                    <ArrowExpand01Icon size="14" className="font-bold" />
                  ) : (
                    <Remove01Icon size="14" className="font-bold" />
                  )}
                </IconButton>
              )}
              {isMaximizable && !isMinimized && (
                <IconButton
                  variant="text"
                  size="sm"
                  color="gray"
                  className="p-0 max-w-6 max-h-6 rounded-sm"
                  onClick={onMaximize}
                >
                  {isMaximized ? (
                    <ArrowShrinkIcon size="14" className="font-bold" />
                  ) : (
                    <ArrowExpandIcon size="14" className="font-bold" />
                  )}
                </IconButton>
              )}
              {onClose && (
                <IconButton
                  variant="text"
                  size="sm"
                  color="gray"
                  className="p-0 max-w-6 max-h-6 rounded-sm hover:text-white hover:bg-pink-500"
                  onClick={() => onClose()}
                >
                  <Cancel01Icon size="14" className="font-bold" />
                </IconButton>
              )}
            </div>
          </CardHeader>
          {!isMinimized && (
            <CardBody className="flex flex-col gap-2 p-3 h-full">
              {children}
            </CardBody>
          )}
        </Card>
      </Draggable>
    </motion.div>
  );
}
