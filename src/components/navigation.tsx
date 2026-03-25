import { useState } from "react";
import {
  Box,
  Link,
  Typography,
  useTheme as useMuiTheme,
  useMediaQuery,
  Container,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ToggleTheme } from "../theme/toggleTheme";
import { useTranslation } from "react-i18next";
import { RESUMES } from "../config/siteContent";

export const Navigation = () => {
  const theme = useMuiTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { t, i18n } = useTranslation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), href: "#home" },
    { label: t("nav.skills"), href: "#skills" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.contact"), href: "#footer" },
  ];

  const isPortuguese = (i18n.resolvedLanguage || i18n.language).startsWith(
    "pt",
  );
  const cvHref = isPortuguese ? RESUMES.pt.file : RESUMES.en.file;
  const cvDownloadName = isPortuguese
    ? RESUMES.pt.downloadName
    : RESUMES.en.downloadName;

  const handleDownloadCv = async () => {
    try {
      const response = await fetch(cvHref);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = cvDownloadName;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      window.open(cvHref, "_blank", "noopener,noreferrer");
    }
  };

  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "background.default",
        zIndex: 1000,
        boxShadow: "none",
        // padding: { xs: "24px 24px", sm: "24px 24px", md: "24px 24px" },
        textAlign: "center",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1500px",
           padding: { xs: "24px 24px", sm: "24px 24px", md: "24px 24px" },
        }}
      >
        <Typography
          sx={{
            color: 'primary.main',
            padding: "4px 8px",
            borderRadius: "12px",
            fontSize: { xs: "1.1rem", sm: "1.5rem" },
            fontWeight: 700,
          }}
        >
          GC
        </Typography>

        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 1.5, sm: 2, md: 3 },
              alignItems: "center",
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontWeight: 500,
                  transition: "all 0.3s ease",

                  "&:hover": {
                    color: "primary.main",
                  },
                  "&::after": {
                    content: '""',

                    bottom: -2,
                    left: 0,
                    width: 0,
                    height: 1.5,
                    backgroundColor: "primary.main",
                    transition: "width 0.3s ease",
                  },
                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Button
                size="small"
                variant="outlined"
                onClick={handleDownloadCv}
                sx={{ minWidth: 36, px: 1.5, fontWeight: 700 }}
              >
                CV
              </Button>

              <Box
                sx={{ display: "flex", gap: 0.5 }}
                aria-label={t("nav.languageSwitcher")}
              >
                <Button
                  size="small"
                  variant={ "text"}
                  onClick={isPortuguese ? () => i18n.changeLanguage("en") : () => i18n.changeLanguage("pt-BR")}
                  sx={{ minWidth: 36, px: 1, fontWeight: 700 }}
                >
                  { isPortuguese ? t("nav.en") : t("nav.pt") }
                </Button>
             
              </Box>

              <ToggleTheme />
          {isMobile ? (
            <>
              <IconButton
                aria-label="Open navigation drawer"
                onClick={() => setIsDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
                <Box sx={{ width: 280, p: 2 }} role="presentation">
                  <Typography sx={{ fontWeight: 700, mb: 1 }}>Menu</Typography>
                  <Divider sx={{ mb: 1 }} />
                  <List>
                    {navItems.map((item) => (
                      <ListItemButton
                        key={item.href}
                        component="a"
                        href={item.href}
                        onClick={closeDrawer}
                      >
                        <ListItemText primary={item.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
             
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};
