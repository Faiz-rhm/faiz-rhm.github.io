'use client'

import {
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Image,
  Container,
  ActionIcon,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMegaMenu.module.css';
import { IconDownload } from '@tabler/icons-react';

export function HeaderMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  return (
    <Box pb={120}>
      <header className={classes.header} style={{ borderBottom: 'none' }}>
        <Container size="xl" style={{ marginTop: "20px" }}>
          <Group justify="flex-start" h="100%" style={{ gap: "50px" }}>
            {/* Logo */}
            <Image
              alt="logo"
              src="/images/logo.png"
              style={{ width: "5%", height: "5%" }}
            />

            {/* Navigation Links */}
            <Group h="100%" gap="28px" visibleFrom="sm" style={{ alignItems: "center" }}>
              <a
                href="#"
                className={classes.link}
                style={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "Manrope",
                  position: "relative",
                  paddingBottom: "5px",
                }}
              >
                ABOUT ME
                <span
                  style={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    top: "100%",
                    transform: "translateX(-50%)",
                    width: "4px",
                    height: "4px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    display: "block",
                  }}
                ></span>
              </a>
              <a
                href="#"
                className={classes.link}
                style={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "Manrope",
                  position: "relative",
                  paddingBottom: "5px",
                }}
              >
                MARKET
              </a>
              <a
                href="#"
                className={classes.link}
                style={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "Manrope",
                  position: "relative",
                  paddingBottom: "5px",
                }}
              >
                PROJECTS
              </a>
            </Group>

            {/* Action Buttons */}
            <Group visibleFrom="sm" style={{ marginLeft: "auto" }}>
              <Button
                variant="default"
                onClick={() => {
                  window.location.href = "mailto:faiz199011@gmail.com?subject=Hello&body=Hi, I would like to connect with you.";
                }}
                style={{
                  background: "#FFFFFF",
                  height: "45px",
                  borderRadius: "12px",
                  color: "#000000",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                SAY “HELLO!”
              </Button>


              <Button
                variant="default"
                style={{
                  background: "#171717",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  height: "45px",
                  borderRadius: "12px",
                  color: "#FFFFFF",
                  fontFamily: "Manrope",
                  fontSize: "16px",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px", // Adjust space between icon and text
                }}
              >
                RESUME
                <ActionIcon size="lg" color="gray" variant="subtle">
                  <IconDownload size={18} stroke={1.5} />
                </ActionIcon>
              </Button>
            </Group>

            {/* Mobile Menu */}
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
          </Group>
        </Container>
      </header>



      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
